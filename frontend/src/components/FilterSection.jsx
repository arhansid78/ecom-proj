import React from "react";
import { useFilterContext } from "../context/FilterContext"; // Importing the custom context
import "./FilterSection.css"; // Importing the CSS for styling

const FilterSection = () => {
  // Destructuring state and methods from context
  const {
    allProducts,
    filters: { text }, // Extracting the 'text' filter from the context
    updateFilter, // Function to update the filters
  } = useFilterContext();

  // Function to get unique values from a specific property in the data
  const getUniqueData = (data, property) => {
    let newVal = data.map((currEle) => currEle[property]); // Extract the property (like category or company)

    // Adding 'All' as the first option and returning only unique values
    return ["All", ...new Set(newVal)];
  };

  // Getting unique categories from the products data
  const categoryOnlyData = getUniqueData(allProducts, "category");

  // Getting unique companies from the products data
  const companyOnlyData = getUniqueData(allProducts, "company");

  return (
    <div className="main-filter">
      {/* Search Input Section */}
      <div className="filter-section">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search input bound to the text filter */}
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilter} // Updates the filter when the input changes
            placeholder="Search"
          />
        </form>
      </div>

      {/* Category Filter Section */}
      <div className="category-data">
        <h3>Category</h3>
        {/* Mapping through unique category data */}
        {categoryOnlyData.map((currEle, ind) => (
          <button
            key={ind}
            type="button"
            name="category"
            value={currEle}
            onClick={updateFilter} // Updating the category filter on button click
          >
            {currEle}
          </button>
        ))}
      </div>

      {/* Company Filter Section */}
      <div className="company-data">
        <h3>Company</h3>
        {/* Company filter dropdown */}
        <form>
          <select name="company" id="company" onChange={updateFilter}>
            {companyOnlyData.map((currEle, ind) => (
              <option key={ind} value={currEle} name="company">
                {currEle}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default FilterSection;
