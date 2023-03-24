import { Pagination } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { setCurrentPage } from "../../../store/slices/autoPartsSlice";

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
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handleChangeCurrentPage}
    />
  );
};
