import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";
import { authAdmin } from "./userSlice";
import { ProductInitialState } from "../../types/productTypes";

const initialState: ProductInitialState = {
  products: [],
  loading: false,
  errors: "",
  totalPages: 1,
  currentPage: 1,
  totalProducts: 0,
};
// fuck
export const fetchGetProducts = createAsyncThunk(
  "product/fetchGetProducts",
  async function (page: number, { dispatch }) {
    try {
      const response: Response = await httpRequest(
        `${PATHDOMAIN}admin/getProducts?page=${page}&limit=5`,
        "GET"
      );
      const data = await response.json();
      console.log(data);
      dispatch(setTotalPages(data.totalPages));
      dispatch(setProducts(data.results));
      dispatch(setTotalProducts(data.totalProducts));
    } catch (e) {
      console.log(e.message());
    }
  }
);

export const productSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalProducts(state, action) {
      state.totalProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetProducts.pending, (state, action) => {
      state.loading = true;
      state.errors = "";
    }),
      builder.addCase(fetchGetProducts.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      }),
      builder.addCase(fetchGetProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.errors = "";
      });
  },
});

// Action creators are generated for each case reducer function
export const { setTotalPages, setProducts, setCurrentPage, setTotalProducts } =
  productSlice.actions;

export default productSlice.reducer;
