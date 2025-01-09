import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";

// Create a context for the cart
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Initial state of the cart
  const initialState = {
    cart: [],
    totalItem: 0,
    totalAmount: 0,
    shippingFees: 50000,
  };

  // Use useReducer hook to manage cart state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to add items to the cart // This Function is calling in addTocart Component
  const addToCart = (id, amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, color, product } });
  };

  // Return the provider with state and functions
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
