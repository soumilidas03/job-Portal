import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.singleCompany;
    },
  },
});

export const { setSingleCompany } = companySlice.actions;
export default companySlice.reducer;
