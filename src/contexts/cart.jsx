import React, { createContext, useState } from "react";

const initialState = { items: [], quantity: 0, value: 0 };

const CartContext = createContext({
  cart: initialState,
  setCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
