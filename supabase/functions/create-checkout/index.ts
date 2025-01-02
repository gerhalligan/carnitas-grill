import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { stripe } from "../_utils/stripe.ts";
import { corsHeaders } from "../_utils/cors.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { cartItems, user_id } = await req.json();

    const lineItems = cartItems.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          description: item.customizations ? 
            `Notes: ${item.customizations.notes || 'None'}, Removed: ${item.customizations.removedIngredients?.join(', ') || 'None'}` : 
            undefined,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Create order first
    const orderData = {
      user_id,
      items: cartItems,
      total: cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0),
      status: 'pending'
    };

    const orderResponse = await fetch(`${Deno.env.get('SUPABASE_URL')}/rest/v1/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
        'apikey': Deno.env.get('SUPABASE_ANON_KEY') || '',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(orderData)
    });

    if (!orderResponse.ok) {
      throw new Error('Failed to create order');
    }

    const order = await orderResponse.json();
    const orderId = order[0].id;

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/order-success?order_id=${orderId}`,
      cancel_url: `${req.headers.get("origin")}/menu?payment=cancelled`,
      metadata: {
        user_id,
        order_id: orderId
      },
    });

    // Update order with Stripe session ID
    await fetch(`${Deno.env.get('SUPABASE_URL')}/rest/v1/orders?id=eq.${orderId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
        'apikey': Deno.env.get('SUPABASE_ANON_KEY') || '',
      },
      body: JSON.stringify({
        stripe_session_id: session.id
      })
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});