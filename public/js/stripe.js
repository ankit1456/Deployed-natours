/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51JUSXrSAVvF4YxNhdmZNUWtU62YRQ7ZJLZ7TJTMftFknJW77GBm721n0FUlWdmMTeRE8UO7LNPoKl68WAD8TiVO300nYg4gV6J'
);

// const stripe = Stripe(
//   'pk_test_51JUFepSJXrXaVcPCfneYKsWpsPDY01063IN5ggEfcckg1W56iXJr16XruMtrGLP0QNFZ0GWKjfL5auSBCbFczRJQ00pgDKfqBB'
// );
export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const stripe = await stripePromise;
    const session = await axios(
      `http://localhost:5000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
