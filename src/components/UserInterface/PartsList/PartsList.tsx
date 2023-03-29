import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  fetchGetAllParts,
  setCurrentPage,
} from "../../../store/slices/autoPartsSlice";
import { PaginationClient } from "../ClientPagination/ClientPagination";
import ProductItemSmall from "../ProductItem/ProductItemSmall";

const PartsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { parts, currentPage, limit } = useSelector(
    (state: RootState) => state.autoParts
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGetAllParts());
  }, [currentPage]);

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
