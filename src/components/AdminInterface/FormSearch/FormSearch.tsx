import React, { useState } from "react";
import "./index.scss";
import { PATHDOMAIN } from "../../../constants";

const FormSearch = () => {
  const [model, setModel] = useState("");
  const [search, setSearch] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const req = await fetch(
      `${PATHDOMAIN}admin/search?search=${search}&model=${model}&page=1&limit=5`
    );
    const { results } = await req.json();
    console.log(results);
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
      </div>
    </form>
  );
};

export default FormSearch;
