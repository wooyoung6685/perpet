import React from "react";
import Banner from "./components/Banner/Banner";
import Brand from "./components/Brand/Brand";
import IconSlider from "./components/IconSlider/IconSlider";
import MultipleSlide from "./components/Multipleslide/MultipleSlide";
import Product from "./components/Product/Product";

function Main() {
  return (
    <div>
      <Banner />
      <IconSlider />
      <Product />
      <MultipleSlide />
      <Brand />
    </div>
  );
}

export default Main;
