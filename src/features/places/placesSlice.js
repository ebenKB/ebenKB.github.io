import { createSlice } from "@reduxjs/toolkit";

export const placesSlice = createSlice({
  name: "places",
  initialState: {
    data: [],
  },
  reducers: {
    addPlaces: (state, action) => {
      return {
        ...state,
        data: action.payload,
      }
    }
  }
})

export const { addPlaces } = placesSlice.actions;
export default placesSlice.reducer;