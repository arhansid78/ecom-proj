import React from "react";
import "./Products.css"; // Import the CSS file for styling
import { useFilterContext } from "../context/FilterContext"; // Import the custom context
import GridView from "./GridView"; // Component to display products in grid view
import Sort from "./Sort"; // Component for sorting options
import FilterSection from "./FilterSection"; // Component for product filtering

const Products = () => {
  const { filterProducts } = useFilterContext(); // Access the filtered products from context

  return (
    <div className="products-container">
      <div className="products-grid">
        {/* First Column: Filter Section */}
        <div className="products-column1">
          {/* FilterSection renders filters for categories, search, and company */}
          <FilterSection />
        </div>

        {/* Second Column: Product list, sorting, and grid view */}
        <div className="products-column2">
          {/* Top Row: Display product count and sorting options */}
          <div className="top-row">
            <div className="top-row-content">
              {/* Placeholder for top row content */}

              {/* Display the number of filtered products */}
              <p>{filterProducts.length} Products</p>
              {/* Sort component for sorting the products */}
              <Sort />
            </div>
          </div>

          {/* Bottom Row: Display products in grid view */}
          <div className="bottom-row">
            {/* Pass filtered products as props to GridView for display */}
            <GridView filterProducts={filterProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
