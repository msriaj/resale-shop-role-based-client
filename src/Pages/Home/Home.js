import React from "react";
import Categories from "../../Components/Categories/Categories";
import Map from "../../Components/Map/Map";
import Slider from "../../Components/Slider/Slider";
import Advertize from "../Advertize/Advertize";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Advertize />
      <Map />
    </div>
  );
};

export default Home;
