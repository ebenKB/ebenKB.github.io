import { createSlice } from "@reduxjs/toolkit";
import { eventSlice } from "../events/eventsSlice";

export const featuredContentSlice = createSlice({
  name: "featuredContent",
  initialState: {
    featuredArticles: []
  },
  reducers: {
    addFeaturedContent: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.data
      }
    }
  }
})

export const { addFeaturedContent } = featuredContentSlice.actions;
export default featuredContentSlice.reducer;
