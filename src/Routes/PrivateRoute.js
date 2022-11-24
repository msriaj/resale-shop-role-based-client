import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Spin } from "../Components/Utility/Spin";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useAuth();

  console.log(loading);

  if (loading) {
    return <Spin />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
