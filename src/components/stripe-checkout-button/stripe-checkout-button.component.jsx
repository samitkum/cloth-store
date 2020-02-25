import StripeCheckout from "react-stripe-checkout";
import React from "react";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const stripeKey = "pk_test_I0MiZJwdJh4TdviOhf6VBed90073dyzzJN";

  const token = token => {
    alert("Payment Successful..!!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      description={`Amount to pay $${price}`}
      token={token}
      billingAddress
      shippingAddress
      amount={stripePrice}
      stripeKey={stripeKey}
      panelLabel="Pay Now"
      image={"https://svgshare.com/i/CUz.svg"}
    />
  );
};

export default StripeCheckoutButton;
