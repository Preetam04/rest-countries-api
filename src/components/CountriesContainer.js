import React from "react";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";
import { getAllCountries } from "../app/countrySlice";

function CountriesContainer() {
  const countries = useSelector(getAllCountries);
  let countriesCard = "";

  countriesCard =
    countries.status === 200
      ? countries.data.map((country) => (
          <CountryCard key={country.name.common} data={country} />
        ))
      : "";

  return (
    <div className="my-8 flex flex-row flex-wrap justify-around gap-8 sm:px-10 lg:px-14 xl:px-20 ">
      {countriesCard}
    </div>
  );
}

export default CountriesContainer;
