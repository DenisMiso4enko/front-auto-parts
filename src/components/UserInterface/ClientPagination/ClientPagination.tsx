import { Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  fetchGetAllParts,
  setCurrentPage,
} from "../../../store/slices/autoPartsSlice";

export const PaginationClient = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { totalPages, currentPage } = useSelector(
    (state: RootState) => state.autoParts
  );

  const handleChangeCurrentPage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setCurrentPage(value));
    dispatch(fetchGetAllParts());
  };

  useEffect(() => {
    dispatch(fetchGetAllParts());
  }, []);

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handleChangeCurrentPage}
    />
  );
};
