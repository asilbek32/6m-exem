import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like: JSON.parse(localStorage.getItem("like")) || [],
};

const likeSlice = createSlice({
  name: "like-slice",
  initialState,
  reducers: {
    getDataLike(state, { payload }) {
      state.like = [...state.like, payload];
      localStorage.setItem("like", JSON.stringify(state.like));
    },
    deleteLike(state, { payload }) {
      state.like = state.like.filter((value) => value.id !== payload);
      localStorage.setItem("like", JSON.stringify(state.like));
    },
  },
});

export const { getDataLike, deleteLike } = likeSlice.actions;
export default likeSlice.reducer;