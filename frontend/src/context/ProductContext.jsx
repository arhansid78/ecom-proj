import { createContext, useEffect, useReducer, useContext } from "react";
import reducer from "../reducer/ProductReducer"; // Import the reducer for managing state

// Create the context
const AppContext = createContext();

// API endpoint for fetching products
const API = "https://api.pujakaitem.com/api/products";

// Initial state for the product context
const initialState = {
  isLoading: false, // Indicates if product data is currently being loaded
  isError: false, // Indicates if there was an error fetching products
  products: [], // Stores all product data fetched from the API
  featureProducts: [], // Stores featured products
  isSingleLoading: false, // Indicates if a single product's data is being loaded
  isSingleError: false, // Indicates if there was an error fetching a single product
  SingleProduct: {}, // Stores data for a single product
};

// Create the provider component for the context
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to fetch all products from the API
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" }); // Set loading state before API call

    try {
      const response = await fetch(url); // Fetch products data using fetch
      const products = await response.json(); // Parse the response as JSON
      dispatch({ type: "SET_FEATURE_DATA", payload: products }); // Dispatch action to store products
    } catch (error) {
      dispatch({ type: "SET_ERROR" }); // Dispatch error action in case of a failed request
    }
  };

  // Function to fetch data for a single product from the API
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" }); // Set loading state for single product

    try {
      const response = await fetch(url); // Fetch single product data using fetch
      const SingleProduct = await response.json(); // Parse the response as JSON
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct }); // Dispatch action to store the single product
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" }); // Dispatch error action in case of a failed request
    }
  };

  // Fetch all products when the component mounts
  useEffect(() => {
    getProducts(API); // Call the getProducts function with the API endpoint
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Provide the state and product fetching functions to the children components
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the product context in other components
const useProductContext = () => {
  return useContext(AppContext); // Hook to consume context data
};

export { AppProvider, AppContext, useProductContext };
