import { createContext, useEffect, useReducer, useContext } from "react";
import { useProductContext } from "./ProductContext"; // Importing product context to access products
import reducer from "../reducer/FilterReducer"; // Importing the reducer function for state management

// Creating Filter Context
const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext(); // Get products from ProductContext
  // console.log(products); // Uncomment to debug and view the fetched products in console

  // Initial state for filter context
  const initialState = {
    filterProducts: [], // Products after applying filters
    allProducts: [], // All available products
    sortingValue: "lowest", // Default sorting option
    filters: {
      text: "", // Search text
      category: "All", // Default category
      company: "All", // Default company filter
    },
  };

  // useReducer to manage the state of filters and sorting
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to handle sorting changes (e.g., sorting by price, name, etc.)
  const sorting = (event) => {
    dispatch({ type: "GET_SORT_VALUE", payload: event.target.value }); // Dispatch the sorting action
  };

  // Function to update filter values (search text, category, company, etc.)
  const updateFilter = (event) => {
    let name = event.target.name; // Get filter name (e.g., category, text)
    let value = event.target.value; // Get the new value for the filter
    dispatch({ type: "UPDATE_FILTER_VALUES", payload: { name, value } }); // Dispatch the action to update the filter
  };

  // useEffect to filter products based on current filters (search text, category, etc.)
  useEffect(() => {
    // Ensure products is not empty or undefined, then apply filters
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]); // Dependency on filters to re-filter when filters change

  // useEffect to sort products when sorting value or products change
  useEffect(() => {
    // Ensure products is not empty or undefined, then sort and filter the products
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [products, state.sortingValue]); // Dependency on products and sorting value to re-sort products

  // Initial useEffect to load all products when component mounts
  useEffect(() => {
    dispatch({ type: "Load_Filter_Products", payload: products });
  }, [products]); // Dependency on products to load them when they become available

  return (
    // Providing state and utility functions (sorting, updateFilter) to the context
    <FilterContext.Provider value={{ ...state, sorting, updateFilter }}>
      {children} {/* Rendering children components */}
    </FilterContext.Provider>
  );
};

// Custom hook to use the FilterContext in other components
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
