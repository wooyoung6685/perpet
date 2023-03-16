import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import IconSlider from "./components/IconSlider/IconSlider";
import Product from "./components/Product/Product";
import Brand from "./components/Brand/Brand";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import MultipleSlide from "./components/Multipleslide/MultipleSlide";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Banner />
        <IconSlider />
        <Product />
        <MultipleSlide />
        <Brand />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
