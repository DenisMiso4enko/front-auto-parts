import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";
import { IAutoPartsInitialState } from "../../types/productTypes";

const initialState: IAutoPartsInitialState = {
  parts: [],
  loading: false,
  errors: "",
  totalPages: 1,
  currentPage: 1,
  totalProducts: 0,
  limit: 10,
};

export const fetchGetAllParts = createAsyncThunk(
  "options/fetchOptions",
  async function ({ currentPage, limit }: any, { dispatch }) {
    try {
      const res: Response = await httpRequest(
        `${PATHDOMAIN}/getAllParts?page=${currentPage}&limit=${limit}`,
        "GET"
      );
      const data = await res.json();

      dispatch(setAutoParts(data.results));
      dispatch(setTotalPages(data.totalPages));
      dispatch(setTotalProducts(data.totalProducts));
    } catch (e) {
      console.log(e.message);
    }
  }
);

export const autoPartsSlice = createSlice({
  name: "parts",
  initialState: initialState,
  reducers: {
    setAutoParts(state, action) {
      state.parts = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalProducts(state, action) {
      state.totalProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllParts.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(fetchGetAllParts.fulfilled, (state, action) => {
        state.loading = false;
        state.errors = "";
      }),
      builder.addCase(fetchGetAllParts.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      });
  },
});

export const { setAutoParts, setTotalProducts, setTotalPages, setCurrentPage } =
  autoPartsSlice.actions;

export default autoPartsSlice.reducer;
