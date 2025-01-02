import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'
import Stripe from 'https://esm.sh/stripe@13.10.0?target=deno'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
      httpClient: Stripe.createFetchHttpClient(),
    })

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    const { data: { user } } = await supabaseClient.auth.getUser()

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { 
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const { cartItems } = await req.json()

    // Create the order first
    const { data: order, error: orderError } = await supabaseClient
      .from('orders')
      .insert({
        user_id: user.id,
        items: cartItems,
        total: cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
        status: 'pending'
      })
      .select()
      .single()

    if (orderError || !order) {
      console.error('Error creating order:', orderError)
      throw new Error('Failed to create order')
    }

    // Get the domain from the request origin or use a default
    const origin = req.headers.get('origin') || 'http://localhost:5173'
    console.log('Origin:', origin)
    console.log('Order ID:', order.id)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartItems.map((item: any) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
            description: item.description || undefined,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${origin}/order-success?order_id=${order.id}`,
      cancel_url: `${origin}/menu?payment=cancelled`,
      metadata: {
        order_id: order.id,
        user_id: user.id
      }
    })

    // Update the order with the Stripe session ID
    const { error: updateError } = await supabaseClient
      .from('orders')
      .update({ stripe_session_id: session.id })
      .eq('id', order.id)

    if (updateError) {
      console.error('Error updating order with Stripe session ID:', updateError)
      // Continue anyway as this is not critical
    }

    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})