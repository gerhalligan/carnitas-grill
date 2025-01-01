import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from 'https://esm.sh/stripe@14.21.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { cartItems } = await req.json();

    // Update to use the correct secret key name
    const stripeSecretKey = Deno.env.get('stripe_secret_key');
    if (!stripeSecretKey) {
      throw new Error('Stripe secret key not found');
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2023-10-16',
    });

    console.log('Creating line items from cart items...');
    const lineItems = cartItems.map((item: any) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: item.customizations 
            ? `Customizations: ${JSON.stringify(item.customizations)}` 
            : undefined,
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents
      },
      quantity: item.quantity,
    }));

    console.log('Creating checkout session with line items:', lineItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/order-success`,
      cancel_url: `${req.headers.get('origin')}/menu`,
    });

    console.log('Checkout session created:', session.id);

    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});