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
// export const selectCategoryBySlug = (state) => {
//   state.categories.data.find((cat) => cat.slug === slug)
// }

// export const selectCategoryBySlug = (state) => (slug) => {
//   state.categories.data.find((cat) => cat.slug === slug)
// }
export default categorySlice.reducer;