import React from "react";
import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component Imports
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import SingleProduct from "./components/SingleProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/protected/Protectedroute";
import ContactSuccess from "./components/ContactSucces";

function App() {
  return (
    <>
      <div>
        {/* Header Component */}
        <Header />

        {/* Main Routes */}
        <Routes>
          <Route exact path="/login" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/contactsuccess" element={<ContactSuccess />} />
            <Route
              exact
              path="/singleproduct/:id"
              element={<SingleProduct />}
            />
            <Route exact path="*" element={<ErrorPage />} />
          </Route>
        </Routes>

        {/* Footer Component */}
        <Footer />

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default App;
