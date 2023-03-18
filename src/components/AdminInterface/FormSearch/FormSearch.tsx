import React, { useState } from "react";
import "./index.scss";
import { PATHDOMAIN } from "../../../constants";

const FormSearch = () => {
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const req = await fetch(
      `${PATHDOMAIN}admin/search?search=${search}&category=${category}&model=${model}&year=${year}`
    );
    setSearch("");
    setYear("");
    setModel("");
    setCategory("");
  };

  return (
    <form className="form-search" onSubmit={handlerSubmit}>
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="form-search__options">
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="блок управения">Блок управления</option>
          <option value="крыша">Крыша</option>
          <option value="Крыло">Крыло</option>
        </select>

        <select
          name="model"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="Opel">Opel</option>
          <option value="Audi">Audi</option>
          <option value="Iveco">Iveco</option>
          <option value="x6">x6</option>
        </select>

        <select
          name="year"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
        </select>
      </div>
    </form>
  );
};

export default FormSearch;
