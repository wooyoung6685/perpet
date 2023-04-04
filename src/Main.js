import React from "react";
import Banner from "./components/Banner/Banner";
import Brand from "./components/Brand/Brand";
import EventBanner from "./components/EventBanner/EventBanner";
import EventBanner2 from "./components/EventBanner/EventBanner2";
import IconSlider from "./components/IconSlider/IconSlider";
import MultipleSlide from "./components/Multipleslide/MultipleSlide";
import Product from "./components/Product/Product";

function Main() {
  return (
    <div>
      <Banner />
      <IconSlider />
      <EventBanner />
      <Product />
      <EventBanner2 img='./images/EventBanner/EventBanner_dog.png' category={"food"} />
      <MultipleSlide />
      <Brand />
    </div>
  );
}

export default Main;
