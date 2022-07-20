import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import countryApi from "../countryApi";

const initialState = {
  countries: [],
};

export const getAllCountries = createAsyncThunk(
  "countries/AllCountries",
  async () => {
    const response = await countryApi
      .get("all")
      .catch((err) => console.log(err));
    return response;
  }
);

export const getCountriesByRegion = createAsyncThunk(
  "countries/CountriesByRegion",
  async (region) => {
    const response = await countryApi
      .get(`/region/${region}`)
      .catch((err) => console.log(err));

    return response;
  }
);

export const getCountriesByName = createAsyncThunk(
  "countries/CountriesByRegion",
  async (name) => {
    const response = await countryApi
      .get(`/name/${name}`)
      .catch((err) => console.log(err));
    return response;
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addCountries: (state, { payload }) => {
      state.countries = payload;
    },
  },
  extraReducers: {
    [getAllCountries.fulfilled]: (state, { payload }) => {
      return { ...state, countries: payload };
    },
    [getCountriesByRegion.fulfilled]: (state, { payload }) => {
      return { ...state, countries: payload };
    },
    [getCountriesByName.fulfilled]: (state, { payload }) => {
      return { ...state, countries: payload };
    },
  },
});

export const getCountries = (state) => state.country.countries;

export default countrySlice.reducer;
