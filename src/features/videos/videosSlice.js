import { createSlice} from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "videos",
  initialState: {
    data: [],
  },
  reducers: {
    addVidoes: (state, action) => {
      return {
        ...state,
        data: action.payload
      }
    }
  }
})

export const { addVidoes } = videoSlice.actions;
export default videoSlice.reducer;