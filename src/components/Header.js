import React from "react";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { useStateContext } from "../ContextProvider";

function Header() {
  const { setDarkmode } = useStateContext();

  const style = {
    header:
      "py-8 px-4 flex flex-row justify-between items-center bg-white shadow-md sm:px-10 lg:px-14 xl:px-20 ",
    logo: "font-semibold text-lg  text-lightmodetext sm:text-xl ",
    button:
      "text-base font-semibold text-lightmodetext font-nonito flex items-center justify-between w-28 ",
    icon: "-rotate-45 scale-75 text-lightmodetext",
  };

  return (
    <header className={`${style.header} dark:bg-darkmodeelements duration-300`}>
      <h1 className={`${style.logo} dark:text-white `}>Where in the world?</h1>
      <button
        className={`${style.button} dark:text-white`}
        onClick={() => setDarkmode((prevState) => !prevState)}
      >
        <NightlightRoundIcon className={`${style.icon} dark:text-white`} />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
