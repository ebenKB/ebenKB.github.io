import { createSlice } from "@reduxjs/toolkit";

export const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    tags: []
  },
  reducers: {
    addTags: (state, action) => {
      return {
        ...state,
        tags: action.payload
      }
    }
  }
})

export const { addTags } = tagsSlice.actions;
export default tagsSlice.reducer;