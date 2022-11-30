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

  if (permission) {
    if (!permission?.includes(role)) {
      return (
        <>
          <p>You Don't Have Access to this Page</p>
          <p>If You Have Please Try To Refresh This page</p>
        </>
      );
    }
  }

  if (user?.uid) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
