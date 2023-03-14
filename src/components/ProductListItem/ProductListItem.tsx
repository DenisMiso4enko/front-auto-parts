import React, { FC } from "react";
import { IProduct } from "../../types/productTypes";
import "./index.scss";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchGetProducts } from "../../store/slices/productSlice";

const ProductListItem = ({
  _id,
  model,
  product,
  article,
  description,
  currency,
  year,
  price,
  updatedAt,
  mark,
}: IProduct) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDeleteProduct = async (id) => {
    try {
      const res = await httpRequest(
        `${PATHDOMAIN}admin/deleteProduct`,
        "DELETE",
        { id }
      );
      dispatch(fetchGetProducts());
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="product__list-item">
      <span>{1}</span>
      <div className="mark-model">
        <p>
          {model} {mark}
        </p>
        <p>{product}</p>
      </div>
      <div className="desc">
        {description}: {article}
      </div>
      <div className="year">{year}</div>
      <div className="price">
        {price} {currency}
      </div>
      <div className="date">{updatedAt}</div>
      <div className="actions">
        <button>edit</button>
        <button onClick={() => handleDeleteProduct(_id)}>delete</button>
      </div>
    </div>
  );
};

export default ProductListItem;
