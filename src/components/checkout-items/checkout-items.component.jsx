import React from "react";
import "./checkout-items.styles.scss";
import { connect } from "react-redux";
import {
  RemoveItem,
  RemoveItemFromCart,
  addItem
} from "../../redux/cart/cart.actions";
const CheckoutItems = ({ Item, removeItem, removeItemFromCart, addItem }) => {
  const { imageUrl, price, quantity, name } = Item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="cart-item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(Item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(Item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItem(Item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(RemoveItem(item)),
  removeItemFromCart: item => dispatch(RemoveItemFromCart(item)),
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItems);
