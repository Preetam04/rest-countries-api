import React, { useEffect } from "react";
import CountriesContainer from "../components/CountriesContainer";
import SearchBar from "../components/SearchBar";
import countryApi from "../countryApi";
import { useDispatch } from "react-redux";
import { addCountries } from "../app/countrySlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCountries = async () => {
      const response = await countryApi
        .get("america")
        .catch((err) => console.log(err));

      dispatch(addCountries(response));
    };

    getCountries();
  }, []);

  return (
    <div className="flex flex-col items-center duration-300">
      <SearchBar />
      <CountriesContainer />
    </div>
  );
}

export default Home;
