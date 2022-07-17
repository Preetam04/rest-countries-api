import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className="flex  fel-col justify-center">
      <div className="flex  fel-col justify-center w-80 px-5 py-3 mt-10 bg-white rounded-sm  shadow-[0px_2px_9px_-5px_black] text-lightmodeinput text-sm outline-none ">
        <SearchIcon />
        <input
          className="flex-1  focus:outline-none pl-4 text-sm font-light"
          placeholder="Search for Country..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
