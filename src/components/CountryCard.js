import React, { useEffect } from "react";

function CountryCard({ data, opacity }) {
  const style = {
    cardContainer:
      "w-[20rem] h-[25.75rem] bg-white shadow rounded-md overflow-hidden cursor-pointer sm:w-[22rem] duration-200 ",
    cardContainer2:
      "w-[20rem] h-[25.75rem] bg-white shadow rounded-md overflow-hidden cursor-pointer sm:w-[22rem] duration-200 opacity-0",
    flag: "w-[22rem] h-[13rem] ",
    countryname:
      "ml-10 mt-7 mb-2.5 text-[1.75rem] font-semibold duration-300 tracking-sm",
    infoPara: "font-normal ml-10 text-base",
    infoSpan: "font-light text-lg",
  };

  return (
    <div className={style.cardContainer}>
      <img src={data.flags.png} alt="flag-img" className={style.flag} />
      <h2 className={`${style.countryname} leading-8`}>{data.name.common}</h2>
      <p className={style.infoPara}>
        Population:{" "}
        <span className={style.infoSpan}>
          {data.population.toLocaleString("en-US")}
        </span>
      </p>
      <p className={style.infoPara}>
        Region: <span className={style.infoSpan}>{data.region}</span>
      </p>
      <p className={style.infoPara}>
        Capital: <span className={style.infoSpan}>{data.capital}</span>
      </p>
    </div>
  );
}

export default CountryCard;
