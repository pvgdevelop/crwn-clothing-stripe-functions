import Stripe from 'stripe';

// This is your test secret API key.
// const stripe = new Stripe(process.env.STRIPE_SECRET);
const stripe = new Stripe('sk_test_G5ioq3AyUUzc62miXMNwzEFc');
const baseUrl = 'https://scintillating-douhua-0cca33.netlify.app/';

export const handler = async (event, context) => {
  console.log({ event }, { context });

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
    success_url: `${baseUrl}success`,
    cancel_url: `${baseUrl}cancel`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
    }),
  };
};
