import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  cart => cart.cartItems
);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  cartItems => {
    return cartItems.reduce((acc, Item) => acc + Item.quantity, 0);
  }
);

export const cartItemsTotalCost = createSelector(
  [cartItemsSelector],
  cartItems => {
    return cartItems.reduce((acc, Item) => acc + Item.quantity * Item.price, 0);
  }
);
