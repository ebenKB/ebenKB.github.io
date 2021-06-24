import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "events",
  initialState: {
    data: [],
  },
  reducers: {
    addEvents: (state, action) => {
      return {
        ...state,
        data: action.payload,
      }
    }
  }
})

export const { addEvents } = eventSlice.actions;
export default eventSlice.reducer;