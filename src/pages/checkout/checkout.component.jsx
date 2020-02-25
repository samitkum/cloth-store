import React from "react";

import "./checkout.styles.scss";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  cartItemsSelector,
  cartItemsTotalCost
} from "../../redux/cart/cart.selector";
const Checkout = ({ cartItems, TotalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length ? (
        cartItems.map(Item => <CheckoutItems key={Item.id} Item={Item} />)
      ) : (
        <h3>No Items inside the cart..!!</h3>
      )}

      <div className="total">Total Amount : ${TotalPrice}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: Current Month/Current Year - CVV: 123
      </div>
      <StripeCheckoutButton price={TotalPrice} />
    </div>
  );
};
const mapStatetoProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  TotalPrice: cartItemsTotalCost
});
export default connect(mapStatetoProps)(Checkout);
