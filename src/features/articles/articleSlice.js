import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    data: [],
  },
  reducers: {
    addArticles: (state, action) => {
      return {
        ...state,
        data: action.payload
      }
    },
  }
})

export const { addArticles } = articleSlice.actions;
export default articleSlice.reducer;