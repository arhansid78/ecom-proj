const FilterReducer = (state, action) => {
  switch (action.type) {
    // Load all products and set up initial state for filtering
    case "Load_Filter_Products":
      return {
        ...state, // Spread the current state to keep other properties
        filterProducts: [...action.payload], // Load products into filterProducts array
        allProducts: [...action.payload], // Store a complete list of all products
      };

    // Get the selected sorting value (e.g., lowest, highest, a-z, z-a)
    case "GET_SORT_VALUE":
      return {
        ...state,
        sortingValue: action.payload, // Update sortingValue in the state
      };

    // Sort the products based on sortingValue in the state
    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...state.filterProducts]; // Use state.filterProducts instead of action.payload

      // Sort by lowest price
      if (state.sortingValue === "lowest") {
        newSortData = tempSortProduct.sort((a, b) => a.price - b.price);
      }

      // Sort by highest price
      if (state.sortingValue === "highest") {
        newSortData = tempSortProduct.sort((a, b) => b.price - a.price);
      }

      // Sort alphabetically from A to Z
      if (state.sortingValue === "a-z") {
        newSortData = tempSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      // Sort alphabetically from Z to A
      if (state.sortingValue === "z-a") {
        newSortData = tempSortProduct.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      return {
        ...state,
        filterProducts: newSortData, // Update state with sorted products
      };

    // Update filter criteria, such as text, category, or company
    case "UPDATE_FILTER_VALUES":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters, // Retain other filter values
          [name]: value, // Dynamically update the specific filter using computed property names
        },
      };

    // Filter products based on current filter values
    case "FILTER_PRODUCTS":
      let { allProducts } = state; // Access all products from state
      let tempFilterProduct = [...allProducts]; // Start with all products before applying filters
      const { text, category, company } = state.filters;

      // Filter by search text if it's present
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      // Filter by category if it's not "All"
      if (category !== "All") {
        tempFilterProduct = tempFilterProduct.filter(
          (product) => product.category === category
        );
      }

      // Filter by company if it's not "All"
      if (company !== "All") {
        tempFilterProduct = tempFilterProduct.filter(
          (product) => product.company === company
        );
      }

      return {
        ...state,
        filterProducts: tempFilterProduct, // Update state with the filtered products
      };

    // Default case: if no action matches, return the current state unchanged
    default:
      return state;
  }
};

export default FilterReducer;
