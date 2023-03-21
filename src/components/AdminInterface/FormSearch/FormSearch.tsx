import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  fetchGetProducts,
  fetchSearchProducts,
} from "../../../store/slices/productSlice";
import "./index.scss";
import Form from "react-bootstrap/Form";

const FormSearch = () => {
  const { autos } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch<AppDispatch>();
  const { currentPage } = useSelector((state: RootState) => state.products);
  const marks = autos?.map((el) => el.mark);
  const [mark, setMark] = useState("");
  const [product, setProduct] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (product.trim() === "") return;
    const params = {
      page: currentPage,
      product,
      mark,
    };
    try {
      dispatch(fetchSearchProducts(params));
    } catch (e) {
      console.log(e.message);
    }
  };
  const handlerClearSearch = () => {
    setMark("");
    setProduct("");
    dispatch(fetchGetProducts(currentPage));
  };

  return (
    <form className="form-search" onSubmit={handlerSubmit}>
      <div>
        <Form.Control
          value={product}
          className="mb-3"
          type="text"
          placeholder="Поиск запчасти..."
          required={false}
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>
      <div className="form-search__options">
        <Form.Select
          className="mark-options"
          aria-label="Default select example"
          value={mark}
          required={false}
          onChange={(e) => setMark(e.target.value)}
        >
          <option value="Марка">Марка</option>
          {marks?.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </Form.Select>
        <button
          className="btn btn-success"
          type="submit"
          disabled={product.trim() === ""}
        >
          Поиск
        </button>
        {product.trim() !== "" || mark ? (
          <button className="btn btn-danger" onClick={handlerClearSearch}>
            Сбросить
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default FormSearch;
