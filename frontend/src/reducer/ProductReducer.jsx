// Reducer function to manage product-related state based on actions
const ProductReducer = (state, action) => {
  switch (action.type) {
    // When the action type is "SET_LOADING", it means data is being fetched,
    // so we set the loading state to true.
    case "SET_LOADING":
      return {
        ...state, // Spread the current state to maintain other values
        isLoading: true, // Set loading to true to show loading state
      };

    // When the action type is "SET_FEATURE_DATA", we receive the data payload (products)
    // and filter it to extract only the featured products.
    case "SET_FEATURE_DATA":
      const featureData = action.payload.filter((currElem) => {
        return currElem.featured === true; // Filter products where 'featured' is true
      });
      return {
        ...state, // Maintain other state values
        isLoading: false, // Data has been fetched, so loading is set to false
        products: action.payload, // Set all products received from the API
        featureProducts: featureData, // Set only the featured products
      };

    // When the action type is "SET_ERROR", it means there was an error in the data fetching process,
    // so we set both loading and error states accordingly.
    case "SET_ERROR":
      return {
        ...state, // Maintain other state values
        isLoading: false, // Loading is set to false since the fetching failed
        isError: true, // Set error state to true to handle the error
      };

    // When the action type is "SET_SINGLE_LOADING", it means data for a single product
    // is being fetched, so we set the loading state specifically for that.
    case "SET_SINGLE_LOADING":
      return {
        ...state, // Maintain other state values
        isSingleLoading: true, // Set single product loading to true
      };

    // When the action type is "SET_SINGLE_PRODUCT", it means the single product data
    // has been fetched, so we store that in the state and stop the loading.
    case "SET_SINGLE_PRODUCT":
      return {
        ...state, // Maintain other state values
        isLoading: false, // Set loading to false, meaning fetching is complete
        SingleProduct: action.payload, // Store the fetched single product data
      };

    // When the action type is "SET_SINGLE_ERROR", it means there was an error fetching
    // the single product, so we handle the error and stop loading.
    case "SET_SINGLE_ERROR":
      return {
        ...state, // Maintain other state values
        isLoading: false, // Stop loading since the fetching failed
        isError: true, // Set error state to true to handle the error
      };

    // Default case, if the action type doesn't match any cases, return the current state unchanged
    default:
      return state;
  }
};

// Export the reducer function to be used in other parts of the app
export default ProductReducer;
