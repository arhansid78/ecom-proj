import "./SingleProductImages.css";
import { useState, useEffect } from "react";

// Component for displaying single product images
const SingleProductImages = ({ imgs = [{ url: "" }] }) => {
  // Initialize state with an empty string initially
  const [image, setImage] = useState("");

  // Update state with the first image when imgs is available
  useEffect(() => {
    if (imgs && imgs.length > 0) {
      setImage(imgs[0].url); // Set the first image URL once imgs is populated
    }
  }, [imgs]); // Dependency array ensures this runs when imgs changes

  return (
    <div className="image-container">
      {/* Section for displaying multiple thumbnails of product images */}
      <div className="multiple-images">
        <div className="grid-images">
          {/* Loop through the images and display each one */}
          {imgs.map((currEle, ind) => {
            return (
              <img
                key={ind} // Unique key for each image
                src={currEle.url} // URL of the image
                alt={currEle.filename} // Alt text for accessibility
                className="multi-images" // CSS class for styling images
                onClick={() => setImage(currEle.url)} // On click, set the selected image
              />
            );
          })}
        </div>
      </div>

      {/* Section for displaying the selected (main) image */}
      <div className="single-image">
        <img src={image} alt="Selected Product" />
      </div>
    </div>
  );
};

export default SingleProductImages;
