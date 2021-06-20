import { createSlice} from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  reducers: {
    addCategories: (state, action) => {
      return {
        ...state,
        data: action.payload
      }
    },
    // getArticleBySlug: (state, action) => {

    // }
  }
})

export const { addCategories } = categorySlice.actions;
export const selectCategoryBySlug = (slug) => {
  return state.data.find((cat) => cat.slug === slug);
}
export default categorySlice.reducer;