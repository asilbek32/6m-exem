import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import likeSlice from "./like-slice";

export const store = configureStore({
  reducer: {
    cartSlice,
    likeSlice
  },
});
