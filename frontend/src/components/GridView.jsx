import React from "react";
import Product from "./Product";
import "./Gridview.css";

const GridView = ({ filterProducts }) => {
  return (
    <div className="gridview-grid">
      {filterProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default GridView;
