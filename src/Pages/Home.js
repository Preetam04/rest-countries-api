import React, { useEffect } from "react";
import CountriesContainer from "../components/CountriesContainer";
import SearchBar from "../components/SearchBar";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../app/countrySlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-screen h-screen fixed overflow-auto mb-20 items-center duration-300 bg-gray-300 dark:bg-darkmodebackground">
      <SearchBar />
      <CountriesContainer />
    </div>
  );
}

export default Home;
