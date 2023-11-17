/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // step-1:
  const { user, loading } = useContext(AuthContext);

  // step-4:
  const location = useLocation();
  console.log("location from private route:", location);

  // step-3:
  if (loading) {
    return (
      <div className="flex justify-center p-40">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  // step-2:
  return user ? children : <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
