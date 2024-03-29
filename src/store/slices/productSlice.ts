import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";
import { ProductInitialState } from "../../types/productTypes";

const initialState: ProductInitialState = {
  products: [],
  loading: false,
  errors: "",
  totalPages: 1,
  currentPage: 1,
  totalProducts: 0,
  editId: '',
  editProduct: null,
};

export const fetchGetEditProduct = createAsyncThunk(
  "product/fetchGetEditProduct",
  async function (id: string, { dispatch }) {
    try {
      const response: Response = await httpRequest(
        `${PATHDOMAIN}admin/getOne/${id}`,
        "GET"
      );
      const product = await response.json();
      console.log(product)
      dispatch(setEditId(id))
      dispatch(setEditProduct(product))
    } catch (e) {
      console.log(e.message())
    }
  }
)

export const fetchGetProducts = createAsyncThunk(
  "product/fetchGetProducts",
  async function (page: number, { dispatch }) {
    try {
      const response: Response = await httpRequest(
        `${PATHDOMAIN}admin/getProducts?page=${page}&limit=5`,
        "GET"
      );
      const data = await response.json();
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
    setEditId(state, action) {
      state.editId = action.payload
    },
    clearEditId(state, action) {
      state.editId = action.payload
    },
    setEditProduct(state, action) {
      state.editProduct = action.payload
    },
    clearEditProduct(state, action) {
      state.editProduct = action.payload
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

export const {
  setTotalPages,
  setProducts,
  setCurrentPage,
  setTotalProducts,
  setEditId,
  setEditProduct,
  clearEditId,
  clearEditProduct,
} = productSlice.actions;

export default productSlice.reducer;
