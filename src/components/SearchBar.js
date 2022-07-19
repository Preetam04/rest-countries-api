import { React, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SearchBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const style = {
    container:
      "flex mt-10 flex-col items-center w-80 justify-between h-[8.3rem] sm:flex-row sm:w-full  sm:px-10 lg:px-14 xl:px-20 sm:items-start sm:h-24",
    inputbar:
      "flex  flex-row justify-center w-80 px-5 py-3  bg-white rounded-sm  shadow-md text-lightmodeinput text-sm outline-none sm:w-96 xl:w-[26rem]",
    input: "flex-1  focus:outline-none pl-4 text-sm font-light",
    dropdownContainer:
      "w-48 py-4 px-6 bg-white  rounded-md  shadow-md flex flex-row justify-between items-center relative cursor-pointer",
    dropdown: "text-[0.86rem] w-fit text-lightmodetext px-6 cursor-pointer",
    dropdownEle: " text-lightmodetext text-sm font-light",
    arrowIcon: "!text-xs rotate-90 !text-lightmodetext",
    dropdownContainer2:
      "absolute w-48 h-36 py-3 top-16 left-0  rounded bg-white shadow-md flex flex-col justify-around items-start  duration-300 opacity-0",
  };

  return (
    <div className={style.container}>
      <div className={style.inputbar}>
        <SearchIcon />
        <input className={style.input} placeholder="Search for Country..." />
      </div>
      <div className="relative self-start">
        <div
          className={style.dropdownContainer}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <p className={style.dropdownEle}>Filter by Region</p>
          <ArrowForwardIosIcon className={style.arrowIcon} />
        </div>
        <div
          className={
            dropdownOpen
              ? `${style.dropdownContainer2} opacity-100`
              : style.dropdownContainer2
          }
        >
          <p className={style.dropdown}>Africa</p>
          <p className={style.dropdown}>America</p>
          <p className={style.dropdown}>Asia</p>
          <p className={style.dropdown}>Europe</p>
          <p className={style.dropdown}>Oceania</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
