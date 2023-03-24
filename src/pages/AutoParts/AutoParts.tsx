import React from "react";
import PartsCategory from "../../components/UserInterface/PartsCategory/PartsCategory";
import "./index.scss";
import SearchForm from "../../components/UserInterface/SearchForm/SearchForm";
import PartsList from "../../components/UserInterface/PartsList/PartsList";

const AutoParts = () => {
  return (
    <div className="parts main-container">
      <div className="parts__head">
        <h2>Запчасти</h2>
        <span>главная</span>
      </div>

      <PartsCategory />
      <div className="parts-wrapper">
        <SearchForm />
        <PartsList />
      </div>
    </div>
  );
};

export default AutoParts;
