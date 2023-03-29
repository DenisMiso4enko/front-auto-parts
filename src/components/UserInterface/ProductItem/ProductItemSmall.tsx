import React from "react";
import { IProduct } from "../../../types/productTypes";
import dayjs from "dayjs";
import { PATHDOMAIN } from "../../../constants";
import "./index.scss";
import noImage from "../../../assets/no-image-icon-6.png";
import { NavLink } from "react-router-dom";

const ProductItemSmall = ({
  _id,
  product,
  mark,
  model,
  description,
  year,
  article,
  price,
  createdAt,
  imagesUrl,
  currency,
}: IProduct) => {
  return (
    <div className="parts-list__item">
      <div className="parts__info">
        <h4>
          <NavLink to={`/auto-parts/${_id}`}>
            {product} к {model} {mark}
          </NavLink>
          , {year} г.
        </h4>
        <p>{description}</p>
        <p>Артикул: {article}</p>
        <p>Дата: {dayjs(createdAt).format("MM.D.YYYY")}</p>
        <p>
          <strong>
            {price} {currency}
          </strong>
        </p>
      </div>

      <div className="parts__photo">
        {imagesUrl.length ? (
          <img src={`${PATHDOMAIN}${imagesUrl[0]}`} alt="image" />
        ) : (
          <img src={noImage} alt="image" />
        )}
      </div>
    </div>
  );
};

export default ProductItemSmall;
