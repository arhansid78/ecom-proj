import { useProductContext } from "../context/ProductContext";
import Product from "./Product";
import "./FeatureProduct.css";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <div className="loading-text">
          <span>Loading</span>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="heading">
        <p className="subheading">Check Now</p>
        <h5 className="main-heading">Our Feature Products</h5>
      </div>
      <div className="container">
        <div className="grid3">
          {featureProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
