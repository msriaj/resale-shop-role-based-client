import React from "react";
import "./loader.css";
const Loading = () => {
  return (
    <div className="w-full h-screen absolute flex bg-white  justify-center items-center">
      <div>
        {console.log("loading")}
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
