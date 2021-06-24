import { createSlice } from '@reduxjs/toolkit';

export const regionSlice = createSlice({
  name: "regions",
  initialState: {
    data: [
      {
        name: "Ashanti Region",
        key: "ashanti_region"
      },
      {
        name: "Greater Accra Region",
        key: "",
      },
      {
        name: "Volta Region",
        key: ""
      },
      {
        name: "Central Region",
        key: "",
      },
      {
        name: "Northern Region",
        key: ""
      },
      {
        name: "Bono Region",
        key: ""
      },
      {
        name: "Bono East Region"
      },
      {
        name: "Ahafo Region",
        key: "",
      },
      {
        name: "Savannah Region",
        key: "",
      },
      {
        name: "North East Region",
        key: "",
      },
      {
        name: "Upper East Region",
        key: ""
      },
      {
        name: "Upper West Region",
        key: ""
      },
      {
        name: "Western North Region",
        key: ""
      },
      {
        name: "Oti Region",
        key: ""
      },
      {
        name: "Eastern Region",
        key: "",
      },
      {
        name: "Western Region",
        key: "",
      }
    ]
  }
})

export default regionSlice.reducer;