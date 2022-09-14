import Stripe from 'stripe';

// This is your test secret API key.
const stripe = new Stripe(process.env.STRIPE_SECRET);

export const handler = async (event, context) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: process.env.HOST + 'success',
    cancel_url: process.env.HOST + 'cancel',
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
    }),
  };
};
