import React from "react";
import Hero from "../features/hero";
import Fashion from "../features/fashion";
import ProductItem from "../features/products-item";
import NewArrivals from "../features/new-arrivals";
import ChooseUs from "../features/choose-us";
import LogoSlider from "../features/logo-slider";
import NewCollectios from "../features/new-collections";

const Home = () => {
  return (
    <div>
      <Hero />
      <Fashion />
      <ProductItem />
      <ChooseUs />
      <NewArrivals />
      <NewCollectios />
      <LogoSlider />
    </div>
  );
};

export default Home;
