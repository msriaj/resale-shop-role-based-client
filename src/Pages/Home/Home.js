import React from "react";
import Categories from "../../Components/Categories/Categories";
import Map from "../../Components/Map/Map";
import { Page } from "../../Components/Page";
import Slider from "../../Components/Slider/Slider";
import Advertize from "../Advertize/Advertize";

const Home = () => {
  return (
    <Page title="NextPhone - Sell Your Old Phone Now">
      <Slider />
      <Categories />
      <Advertize />
      <Map />
    </Page>
  );
};

export default Home;
