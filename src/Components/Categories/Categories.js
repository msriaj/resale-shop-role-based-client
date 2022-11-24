import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Categories = () => {
  return (
    <div className="md:w-10/12 mx-auto">
      <h2 className="text-3xl mb-5">Top Selling Brands</h2>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-5">
        <div className="border w-48 p-5 grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-lg">
          <Link>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/OPPO_LOGO_2019.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow w-48 p-5 rounded-md">
          <Link>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/OPPO_LOGO_2019.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow w-48 p-5 rounded-md">
          <Link>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/OPPO_LOGO_2019.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow w-48 p-5 rounded-md">
          <Link>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/OPPO_LOGO_2019.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow w-48 p-5 rounded-md">
          <Link>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/OPPO_LOGO_2019.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="shadow w-48 p-5 rounded-md">
          <Link>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/OPPO_LOGO_2019.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="mx-5 md:mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Categories;
