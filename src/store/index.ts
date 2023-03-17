import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice"
import productSlice from "./slices/productSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<any,any,any>