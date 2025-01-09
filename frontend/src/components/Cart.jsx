import React from "react";
import { useCartContext } from "../context/CartContext";
const Cart = () => {
  const { cart } = useCartContext;
  console.log(cart);

  return <></>;
};
export default Cart;
