import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { PaginationClient } from "../ClientPagination/ClientPagination";
import ProductItemSmall from "../ProductItem/ProductItemSmall";
import Skeleton from "../../Skeleton/Skeleton";

const PartsList = () => {
  const { parts, loading } = useSelector((state: RootState) => state.autoParts);

  return (
    <div className="parts-list">
      {loading
        ? [...new Array(12)].map((_, i) => <Skeleton key={i} />)
        : parts?.map((el) => <ProductItemSmall key={el._id} {...el} />)}
      <div className="parts-list__pagination">
        <PaginationClient />
      </div>
    </div>
  );
};

export default PartsList;
