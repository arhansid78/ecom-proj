import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing icons
import { NavLink } from "react-router-dom";
import "./AddToCart.css";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, color, amount } = product;
  const [amt, setAmount] = useState(0);

  // Function to increment the count
  const increment = () => {
    if (amt < stock) {
      setAmount(amt + 1);
    }
  };

  // Function to decrement the counts
  const decrement = () => {
    if (amt > 0) {
      setAmount(amt - 1);
    }
  };

  return (
    <>
      <div>
        <div className="add-to-cart">
          <button onClick={increment}>
            <FaPlus className="icon-btn-style" />
          </button>
          <p className="inc-dec">{amt}</p>
          <button onClick={decrement}>
            <FaMinus className="icon-btn-style" />
          </button>
        </div>
      </div>
      <div>
        <NavLink to="/cart">
          <button
            onClick={() => addToCart(id, color, amount, product)}
            className="add-to-cart-style"
          >
            add to cart
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;
