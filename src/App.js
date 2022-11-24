import "./App.css";
import Categories from "./Components/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Map from "./Components/Map/Map";
import Nav from "./Components/Nav/Nav";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <>
      <Nav />
      <Slider />
      <Categories />
      <Map />
      <Footer />
    </>
  );
}

export default App;
