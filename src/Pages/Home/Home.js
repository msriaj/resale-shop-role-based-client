import React from "react";
import Categories from "../../Components/Categories/Categories";
import Map from "../../Components/Map/Map";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Map />
    </div>
  );
};

export default Home;
