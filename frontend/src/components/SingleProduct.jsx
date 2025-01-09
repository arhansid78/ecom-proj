import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontext"; // Custom hook for accessing product context
import { NavLink } from "react-router-dom"; // For navigation links
import FormatPrice from "../helpers/FormatPrice"; // Helper function for formatting price
import { TbTruckDelivery } from "react-icons/tb"; // Truck icon
import { AiFillCar } from "react-icons/ai"; // Car icon
import { MdLocalShipping } from "react-icons/md"; // Shipping icon
import SingleProductImages from "./SingleProductImages"; // Component for displaying product images
import Star from "./Star"; // Component for showing star ratings
import AddToCart from "./AddToCart"; // Component for adding products to cart
import "./SingleProduct.css"; // Importing CSS for styling

// API endpoint to fetch single product data
const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  // Extract values from product context
  const { getSingleProduct, SingleProduct, isLoading } = useProductContext();

  // Get the product ID from the route parameters using useParams
  const { id } = useParams();
  console.log(id);

  // Destructure the SingleProduct object for easy access to its properties
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = SingleProduct;

  // Fetch single product data when the component mounts
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]); // The effect depends on the product ID and the getSingleProduct function

  // Display a loading message if the product data is still being fetched
  if (isLoading) {
    return <h1 style={{ fontSize: "100px", marginTop: "5rem" }}>Loading...</h1>;
  }

  // Return the JSX to render the product details page
  return (
    <>
      {/* Navigation Bar for showing current product */}
      <div className="navi-gation-bar">
        <NavLink to="/">Home</NavLink>/{name}
      </div>

      {/* Grid layout for single product */}
      <div className="grid2-container">
        <div className="single-product-grid">
          {/* Image Area */}
          <div className="image-area">
            <SingleProductImages imgs={image} />
          </div>

          {/* Product Information Area */}
          <div className="data-area">
            <h1>{name}</h1>

            {/* Display Star Ratings and Reviews */}
            <Star stars={stars} reviews={reviews} />

            {/* Display Price with MRP and Discounted Price */}
            <p className="mrp-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="real-price">
              Deal of the day:
              <FormatPrice price={price} />
            </p>

            {/* Product Description */}
            <p>{description}</p>

            {/* Product Warranty and Delivery Information */}
            <div className="truck-data-warranty">
              <div className="product-waranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-waranty-data">
                <AiFillCar className="warranty-icon" />
                <p>30 days replacement</p>
              </div>
              <div className="product-waranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered</p>
              </div>
              <div className="product-waranty-data">
                <MdLocalShipping className="warranty-icon" />
                <p>2 years warranty</p>
              </div>
            </div>

            {/* Product Information like Stock, ID, Brand */}
            <div className="product-data-info">
              <p>
                Available:
                <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID:
                <span>{alias}</span>
              </p>
              <p>
                BRAND:
                <span>{company}</span>
              </p>
            </div>

            {/* Add to Cart Section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
