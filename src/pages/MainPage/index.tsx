import React from "react";
import { Presentation } from "../../components/UserInterface/Sections/Presentation";
import Slider from "../../components/UserInterface/Slider/Slider";
import "./index.scss";

export const MainPage = () => {
  return (
    <div className="main-container main">
      <Presentation />
      <Slider />
    </div>
  );
};
