import React from "react";
import "./loader.css";
const Loading = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-[1000000000000]  bg-gray-100 overflow-hidden  justify-center items-center">
      <div className="absolute top-[50%] left-[50%] ">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
