import React from "react";

const Input = ({ title, placeholder, name, type }) => {
  return (
    <div className="w-full mt-5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={name}
          className="block w-full  border p-2  rounded"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default Input;
