import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Spin } from "../Components/Utility/Spin";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);

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
