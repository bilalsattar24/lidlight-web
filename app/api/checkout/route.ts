import { PRICE_CENTS } from "@/lib/price";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: "Stripe is not connected yet." },
      { status: 503 },
    );
  }

  const stripe = new Stripe(secret);
  const origin = new URL(request.url).origin;
  const price = process.env.STRIPE_PRICE_ID;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_creation: "always",
    billing_address_collection: "auto",
    success_url: `${origin}/thanks?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: origin,
    line_items: price
      ? [{ price, quantity: 1 }]
      : [
          {
            quantity: 1,
            price_data: {
              currency: "usd",
              unit_amount: PRICE_CENTS,
              product_data: {
                name: "LidLight",
                description:
                  "One-time license for one Mac. Menu bar control, music, and off in the dark.",
              },
            },
          },
        ],
    metadata: { product: "lidlight" },
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "Stripe did not return a checkout link." },
      { status: 502 },
    );
  }

  return NextResponse.json({ url: session.url });
}
