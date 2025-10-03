import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("cart")) || [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getData(state, { payload }) {
      if (state.data.find((value) => value.id === payload.id)) {
        state.data = state.data.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              count: (item.count += 1),
              userPrice: item.count * item.price,
            };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(state.data));
        return;
      }
      state.data = [
        ...state.data,
        { ...payload, count: 1, userPrice: payload.price },
      ];

      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    deleteData(state, { payload }) {
      state.data = state.data.filter((value) => value.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    increment(state, { payload }) {
      const shop = state.data.map((value) =>
        value.id === payload
          ? {
              ...value,
              count: value.count + 1,
              userPrice: value.price * (value.count + 1),
            }
          : value
      );

      state.data = shop;
      localStorage.setItem("cart", JSON.stringify(shop));
    },

    decrement(state, { payload }) {
      const shop = state.data.map((value) =>
        value.id === payload && value.count > 1
          ? {
              ...value,
              count: value.count - 1,
              userPrice: value.price * (value.count - 1),
            }
          : value
      );

      state.data = shop;
      localStorage.setItem("cart", JSON.stringify(shop));
    },
    deleteAllData: (state) => {
      state.data = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { getData, deleteData, increment, decrement, deleteAllData } =
  cartSlice.actions;
export default cartSlice.reducer;
