import React from "react";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

function Header() {
  const style = {
    header:
      "py-8 px-4 flex flex-row justify-between items-center bg-white shadow-md sm:px-10 lg:px-14 xl:px-20",
    logo: "font-semibold text-lg  text-lightmodetext sm:text-xl ",
    button:
      "text-base font-semibold text-lightmodetext font-nonito flex items-center justify-between w-28 ",
    icon: "-rotate-45 scale-75 text-lightmodetext",
  };

  return (
    <header className={style.header}>
      <h1 className={style.logo}>Where in the world?</h1>
      <button className={style.button}>
        <NightlightRoundIcon className={style.icon} />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
