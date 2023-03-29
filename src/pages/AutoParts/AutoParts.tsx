import React, { useEffect } from "react";
import PartsCategory from "../../components/UserInterface/PartsCategory/PartsCategory";
import "./index.scss";
import SearchForm from "../../components/UserInterface/SearchForm/SearchForm";
import PartsList from "../../components/UserInterface/PartsList/PartsList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setCurrentPage } from "../../store/slices/autoPartsSlice";

const AutoParts = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, []);
  return (
    <div className="parts main-container">
      <div className="parts__head">
        <h2>Запчасти</h2>
        <span>главная</span> - <span>запчасти</span>
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
