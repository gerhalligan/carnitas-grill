import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { stripe } from "../_utils/stripe.ts";
import { corsHeaders } from "../_utils/cors.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { items, user_id } = await req.json();

    const lineItems = items.map((item: any) => ({
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

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/order-success?order_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/menu?payment=cancelled`,
      metadata: {
        user_id,
      },
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