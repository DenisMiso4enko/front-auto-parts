import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";
import { authAdmin } from "./userSlice";
import { ProductInitialState } from "../../types/productTypes";

const initialState: ProductInitialState = {
  searchValue: "",
  products: [],
  loading: false,
  errors: "",
};

export const fetchGetProducts = createAsyncThunk(
  "product/fetchGetProducts",
  async function () {
    try {
      const response: Response = await httpRequest(
        `${PATHDOMAIN}admin/getProducts`,
        "GET"
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e.message());
    }
  }
);

export const productSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
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
        state.products = action.payload;
        state.errors = "";
      });
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue } = productSlice.actions;

export default productSlice.reducer;
