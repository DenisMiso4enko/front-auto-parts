import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { PaginationClient } from "../ClientPagination/ClientPagination";
import ProductItemSmall from "../ProductItem/ProductItemSmall";

const PartsList = () => {
  const { parts } = useSelector((state: RootState) => state.autoParts);

  return (
    <div className="parts-list">
      {parts?.map((el) => (
        <ProductItemSmall key={el._id} {...el} />
      ))}
      <div className="parts-list__pagination">
        <PaginationClient />
      </div>
    </div>
  );
};

export default PartsList;
