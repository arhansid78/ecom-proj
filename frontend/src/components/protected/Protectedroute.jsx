import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const toastShownRef = useRef(false); // Ref to track if toast has been shown

  useEffect(() => {
    // Show toast only if there's no token and if it hasn't been shown already
    if (!token && !toastShownRef.current) {
      toast.error("Please Login!");
      toastShownRef.current = true; // Mark toast as shown
    }
  }, [token]); // Only trigger when `token` changes

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
