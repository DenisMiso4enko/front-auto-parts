import React, { useState } from "react";
import "./index.scss";
import { PATHDOMAIN } from "../../../constants";

const FormSearch = () => {
  const [mark, setMark] = useState("");
  const [product, setProduct] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const req = await fetch(
      `${PATHDOMAIN}admin/search?search=${product}&model=${mark}&page=1&limit=10`
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
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>
      <div className="form-search__options">
        <select
          name="model"
          id="model"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
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
