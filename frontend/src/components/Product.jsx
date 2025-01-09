import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const Product = ({ id, image, price, name, category }) => {
  return (
    <NavLink to={`/singleproduct/${id}`} className="text-link">
      <div className="card">
        <img src={image} alt={name} />
      </div>
      <div className="image-top">
        {/* <h1 className="image-heading">{category}</h1> */}
        <div className="bottom-text">
          <p className="p1">{name}</p>
          <p>
            <FormatPrice price={price} />
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
