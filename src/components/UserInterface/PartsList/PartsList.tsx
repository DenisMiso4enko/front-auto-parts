import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchGetAllParts } from "../../../store/slices/autoPartsSlice";
import { PaginationClient } from "../ClientPagination/ClientPagination";
import ProductItemSmall from "../ProductItem/ProductItemSmall";

const PartsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { parts, currentPage, limit } = useSelector(
    (state: RootState) => state.autoParts
  );

  console.log("parts", parts);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGetAllParts({ currentPage, limit }));
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
