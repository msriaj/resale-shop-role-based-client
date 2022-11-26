import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Utility/Loading";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ permission, children }) => {
  const location = useLocation();

  const { loading, user, role } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (user.uid) {
    if (permission?.includes(role)) {
      return children;
    } else {
      return <p>You Don't Have Access to this Page</p>;
    }
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
