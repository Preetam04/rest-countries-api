import React from "react";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";
import { getCountries } from "../app/countrySlice";

function CountriesContainer() {
  const countries = useSelector(getCountries);
  let countriesCard = "";

  const style = {
    countriesContainer:
      "my-8 flex flex-row flex-wrap justify-around gap-8 sm:px-10 lg:px-14 xl:px-20 ",
  };

  countriesCard =
    countries.status === 200 ? (
      countries.data.map((country) => (
        <CountryCard
          key={country.name.common}
          data={country}
          className="opacity-100"
        />
      ))
    ) : countries.status === null ? (
      <p className="text-xl text-lightmodeinput">Couldn't Load the Country</p>
    ) : (
      <p className="text-xl text-lightmodeinput">Loading...</p>
    );

  return <div className={style.countriesContainer}>{countriesCard}</div>;
}

export default CountriesContainer;
