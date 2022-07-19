import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countrySlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
