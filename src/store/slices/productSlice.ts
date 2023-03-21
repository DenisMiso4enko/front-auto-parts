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
  editProduct: null,
  productQuery: "",
  markQuery: "",
};

export const fetchGetEditProduct = createAsyncThunk(
  "product/fetchGetEditProduct",
  async function (id: string, { dispatch }) {
    try {
      const response: Response = await httpRequest(
        `${PATHDOMAIN}/admin/getOne/${id}`,
        "GET"
      );
      const product = await response.json();
      // dispatch(setEditProduct(product));
    } catch (e) {
      console.log(e.message());
    }
  }
);

export const fetchGetProducts = createAsyncThunk(
  "product/fetchGetProducts",
  async function (page: number, { dispatch }) {
    try {
      const response: Response = await httpRequest(
        `${PATHDOMAIN}/admin/getProducts?page=${page}&limit=10`,
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

export const fetchSearchProducts = createAsyncThunk(
  "product/fetchSearchProducts",
  async function (params: any, { dispatch }) {
    const { page, product, mark } = params;
    try {
      const response: Response = await httpRequest(
        `${PATHDOMAIN}/admin/search?product=${product}&mark=${mark}&page=${page}&limit=10`,
        "GET"
      );
      const data = await response.json();
      dispatch(setTotalPages(data.totalPages));
      dispatch(setProducts(data.results));
      dispatch(setTotalProducts(data.totalProducts));
    } catch (e) {
      console.log(e.message);
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
    setEditProduct(state, action) {
      state.editProduct = action.payload;
    },
    clearEditProduct(state, action) {
      state.editProduct = action.payload;
    },
    setProductQuery(state, action) {
      state.productQuery = action.payload;
    },
    setMarkQuery(state, action) {
      state.markQuery = action.payload;
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
      }),
      builder.addCase(fetchSearchProducts.pending, (state, action) => {
        state.loading = true;
        state.errors = "";
      }),
      builder.addCase(fetchSearchProducts.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      }),
      builder.addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.errors = "";
      });
  },
});

export const { setTotalPages, setProducts, setCurrentPage, setTotalProducts } =
  productSlice.actions;

export default productSlice.reducer;
