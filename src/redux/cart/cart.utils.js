export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const RemoveItemFromCart = (cartItems, ItemToRemove) => {
  const existingCartItem = cartItems.find(Item => Item.id === ItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(Item => Item.id !== ItemToRemove.id);
  }

  return cartItems.map(Item =>
    Item.id === ItemToRemove.id
      ? { ...Item, quantity: Item.quantity - 1 }
      : Item
  );
};
