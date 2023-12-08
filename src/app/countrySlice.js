import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import countryApi from "../countryApi";

const initialState = {
  countries: {},
  countriesForBorder: {},
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

export const getCountriesForBorder = createAsyncThunk(
  "countries/CountriesForBorder",
  async (elee) => {
    const data = elee.forEach(async (ele) => {
      const response = await countryApi
        .get(`/alpha/${ele}`)
        .catch((err) => console.log(err));
      // console.log(response);
      // return response;
    });
    console.log(data);
    return data;
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    removeCountries: (state) => {
      state.country.countries = {};
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
    [getCountriesForBorder.fulfilled]: (state, { payload }) => {
      return { ...state, countriesForBorder: payload };
    },
  },
});

export const getCountries = (state) => state.country.countries;
export const getBorderCountries = (state) => state.country.countriesForBorder;
export const removeCountries = countrySlice.actions;
export default countrySlice.reducer;
