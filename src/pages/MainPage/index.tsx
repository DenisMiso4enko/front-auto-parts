import React from "react";
import Slider from "../../components/UserInterface/Slider/Slider";
import { Presentation } from "../../components/UserInterface/Sections/Presentation";
import { OurOffer } from "../../components/UserInterface/Sections/OurOffer";
import { PopularProducts } from "../../components/UserInterface/Sections/PopularProducts";
import "./index.scss";

export const MainPage = () => {
  return (
    <div className="main-container main">
      <Presentation />
      <OurOffer />
      <PopularProducts />
      <Slider />
    </div>
  );
};
