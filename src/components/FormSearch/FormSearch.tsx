import React, { useState } from "react";
import "./index.scss";
import { PATHDOMAIN } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setSearchValue } from "../../store/slices/productSlice";

const FormSearch = () => {
  const { searchValue } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const handlerSubmit = async (e) => {
    e.preventDefault();

    // const req = await fetch(`${PATHDOMAIN}admin/search?search=${search}`);
  };
  const handlerChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <form className="form-search">
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Поиск по артикулу..."
          value={searchValue}
          onChange={handlerChange}
        />
      </div>
    </form>
  );
};

export default FormSearch;
