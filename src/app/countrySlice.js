import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addCountries: (state, { payload }) => {
      state.countries = payload;
    },
  },
});

export const { addCountries } = countrySlice.actions;
export const getAllCountries = (state) => state.country.countries;

export default countrySlice.reducer;
