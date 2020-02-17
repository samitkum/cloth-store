import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { cartItemsSelector } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, toggleCart }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <div>No Items Inside the cart</div>
      )}
    </div>
    <CustomButton
      onClick={() => {
        toggleCart();
        history.push("/checkout");
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });
const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
