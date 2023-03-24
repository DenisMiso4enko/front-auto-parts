import React from "react";
import Slider from "../../components/UserInterface/Slider/Slider";
import "./index.scss";

export const MainPage = () => {
  return (
    <div className="main-container main">
      <h1 className="main__title">Автозапчасти БУ из Европы</h1>
      <Slider />
    </div>
  );
};
