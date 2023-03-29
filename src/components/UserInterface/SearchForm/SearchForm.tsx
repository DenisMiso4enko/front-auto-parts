import React, { useState } from "react";
import "./index.scss";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  fetchGetAllParts,
  fetchSearch,
  setCurrentPage,
} from "../../../store/slices/autoPartsSlice";
import { fetchGetProducts } from "../../../store/slices/productSlice";

const SearchForm = () => {
  const { autos, options, partsCategory } = useSelector(
    (state: RootState) => state.settings
  );
  const [mark, setMark] = useState("");
  const [modelVal, setModelVal] = useState("");
  const [yearVal, setYearVal] = useState("");
  const [productVal, setProductVal] = useState("");
  const [articleVal, setArticleVal] = useState("");
  const [numberVal, setNumberVal] = useState("");
  const [models, setModels] = useState([]);

  const marks = autos?.map((el) => el.mark);
  const years = options?.map((el) => el.years);

  const dispatch = useDispatch<AppDispatch>();

  const handlerOnChangeMarks = (e: any) => {
    const mark = e.target.value;
    setMark(mark);
    const { models } = autos?.find((el) => el.mark === mark);
    setModels(models);
  };

  const handlerSearchForm = async (e) => {
    e.preventDefault();
    try {
      const formField = {
        mark: mark,
        model: modelVal,
        year: yearVal,
        product: productVal,
        article: articleVal,
        numberOfProduct: numberVal,
      };
      dispatch(setCurrentPage(1));
      dispatch(fetchSearch(formField));
    } catch (e) {
      console.log(e.message);
    }
  };

  const handlerClearSearch = () => {
    setMark("");
    setProductVal("");
    setModelVal("");
    setYearVal("");
    setArticleVal("");
    setNumberVal("");
    dispatch(fetchGetAllParts());
  };

  return (
    <div className="search-form search-form-wrapper">
      <h4 className="search-form__title">Поиск Запчастей</h4>
      <hr />
      <form className="form-search-part" onSubmit={handlerSearchForm}>
        <Form.Select
          aria-label="Default select example"
          value={mark}
          required={true}
          onChange={handlerOnChangeMarks}
        >
          <option value="Марка">Марка</option>
          {marks?.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          value={modelVal}
          required={false}
          onChange={(e) => setModelVal(e.target.value)}
        >
          <option value="Модель">Модель</option>
          {models?.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          value={yearVal}
          required={false}
          onChange={(e) => setYearVal(e.target.value)}
        >
          <option value="Год">Год</option>
          {years &&
            years[0].map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          value={productVal}
          required={false}
          onChange={(e) => setProductVal(e.target.value)}
        >
          <option value="Марка">Запчасть</option>
          {partsCategory?.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </Form.Select>

        <Form.Control
          defaultValue={articleVal}
          value={articleVal}
          type="text"
          placeholder="Введите артикул запчасти"
          required={false}
          onChange={(e) => setArticleVal(e.target.value)}
        />

        <Form.Control
          defaultValue={numberVal}
          value={numberVal}
          type="text"
          placeholder="Введите номер запчасти"
          required={false}
          onChange={(e) => setNumberVal(e.target.value)}
        />

        <button className="btn btn-success" type="submit">
          Найти
        </button>
        {mark ||
        productVal.trim() ||
        modelVal ||
        yearVal ||
        articleVal.trim() ||
        numberVal.trim() ? (
          <button
            className="btn btn-danger"
            type="button"
            onClick={handlerClearSearch}
          >
            Сбрость
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default SearchForm;