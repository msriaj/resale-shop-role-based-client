import React from "react";
import { useAuth } from "../../hooks/useAuth";

const Overview = () => {
  const { user } = useAuth();
  return (
    <div className="h-screen w-full p-12 text-gray-500">
      <h1 className="text-2xl font-bold">Hello, {user?.displayName}</h1>
      <p>Welcome To Dashboard</p>
    </div>
  );
};

export default Overview;
