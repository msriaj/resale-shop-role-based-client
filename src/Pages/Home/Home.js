import React from "react";
import Categories from "../../Components/Categories/Categories";
import Map from "../../Components/Map/Map";
import Slider from "../../Components/Slider/Slider";
import PostList from "../PostList/PostList";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Map />
      <PostList />
    </div>
  );
};

export default Home;
