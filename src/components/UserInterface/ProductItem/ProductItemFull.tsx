import React from "react";
import { IProduct } from "../../../types/productTypes";
import { PATHDOMAIN } from "../../../constants";
import "./index.scss";
import dayjs from "dayjs";
import noImage from "../../../assets/no-image-icon-6.png";

const ProductItemFull = ({
  _id,
  product,
  mark,
  numberOfProduct,
  article,
  price,
  year,
  model,
  description,
  currency,
  createdAt,
  imagesUrl,
  box,
  fuel,
  mode,
  type,
  bodyType,
  state,
  views,
  volume,
  updatedAt,
}: IProduct) => {
  const image = imagesUrl?.[0];
  return (
    <div className="full-product">
      <div className="full-product__head">
        <h4>
          <strong>{product}</strong> к {model} {mark}, {year} г.
        </h4>
        <span>
          {price} {currency}
        </span>
      </div>

      <div className="full-product__info">
        <div className="full-product__images">
          {imagesUrl?.length ? (
            <img src={`${PATHDOMAIN}${image}`} alt={product} />
          ) : (
            <img src={noImage} alt={product} />
          )}
        </div>
        <div className="full-product__text">
          <div className="">
            <p>
              Артикул: <strong>{article}</strong>
            </p>
          </div>
          <div className="">
            <p>
              Номер запчасти <strong>{numberOfProduct}</strong>
            </p>
          </div>
          <div className="">
            <p>
              Состояние <strong>{state}</strong>
            </p>
          </div>
          <div className="">
            <p>Доставка: По договоренности</p>
          </div>
          <div className="">
            <p>Форма оплаты: Наличный расчет</p>
          </div>
          <div className="">
            <p>
              Дата: <strong>{dayjs(createdAt).format("MM.D.YYYY")}</strong>
            </p>
          </div>
          <div className="">
            {bodyType && (
              <p>
                Тип кузова: <strong>{bodyType}</strong>
              </p>
            )}
          </div>
          <div className="">
            {box && (
              <p>
                Коробка: <strong>{box}</strong>
              </p>
            )}
          </div>
          <div className="">
            {fuel && (
              <p>
                Топливо: <strong>{fuel}</strong> {volume} л. {type}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="full-product__desc">
        <p>{description}</p>
      </div>

      <div className="full-product__another">Другая информация для клиета</div>
    </div>
  );
};

export default ProductItemFull;
