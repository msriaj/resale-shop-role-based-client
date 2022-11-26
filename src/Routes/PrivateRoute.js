import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Utility/Loading";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { loading, user } = useAuth();

  console.log(loading);

  if (loading) {
    return <Loading />;
  }

  if (user.uid) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
