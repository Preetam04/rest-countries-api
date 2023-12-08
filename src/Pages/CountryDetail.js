import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBorderCountries,
  getCountries,
  getCountriesForBorder,
  removeCountries,
} from "../app/countrySlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import countryApi from "../countryApi";

function CountryDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countries = useSelector(getCountries);
  let info = "";

  info =
    countries.status === 200
      ? countries.data.filter((ele) => ele.name.common === name)[0]
      : "";

  const style = {
    container:
      "flex flex-col items-start justify-start sm:px-10 lg:px-14 xl:px-20 ",
    backButton:
      "bg-white shadow-xl py-2 px-3 rounded-md flex flex-row items-center justify-between w-[5.5rem] ml-8 mt-8 absolute dark:bg-darkmodeelements dark:text-white",
    arrowBack: "!text-xl font-nonito font-light",
    detailContainer:
      "flex flex-col items-center justify-center w-full h-full mt-12 px-7 sm:px-10 lg:px-14 xl:px-20 ",
    name: "font-semibold text-2xl",
    detailPara:
      "mt-2.5 font-semibold text-base text-lightmodetext lg:text-lg dark:text-white",
    detailSpan:
      "font-normal  text-sm text-lightmodetext lg:text-base dark:text-white",
  };

  return countries.status === 200 ? (
    <div className=" flex flex-row items-start justify-start sm:px-10 lg:px-14 xl:px-20 dark:bg-darkmodebackground  h-[100vh] ">
      <button
        className={style.backButton}
        onClick={() => {
          navigate("/");
          dispatch(removeCountries());
        }}
      >
        <ArrowBackIcon className={style.arrowBack} />
        Back
      </button>
      <div className="mt-28 w-full flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-around lg:ml-10 lg:mt-36 dark:bg-darkmodebackground dark:text-white">
        <img
          src={info.flags.svg}
          alt="flag"
          className="w-auto sm:w-[32rem] sm:h-[22rem] lg:h-[26rem] lg:w-[37rem]"
        />
        <div className="self-start flex-1 ml-8 mt-8 sm:mt-0 sm:ml-20 lg:ml-28">
          <h2 className={`${style.name} sm:text-4xl`}>{info.name.common}</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between lg:w-[35rem]">
            <div>
              <p className={`${style.detailPara} !mt-7`}>
                Native Name:{" "}
                <span className={style.detailSpan}>
                  {info.name.nativeName[Object.keys(info.languages)[0]].common}
                </span>
              </p>
              <p className={style.detailPara}>
                Population:{" "}
                <span className={style.detailSpan}>
                  {info.population.toLocaleString("en-US")}
                </span>
              </p>
              <p className={style.detailPara}>
                Region: <span className={style.detailSpan}>{info.region}</span>
              </p>
              <p className={style.detailPara}>
                Sub Region:{" "}
                <span className={style.detailSpan}>{info.subregion}</span>
              </p>
              <p className={style.detailPara}>
                Capital:{" "}
                <span className={style.detailSpan}>{info.capital[0]}</span>
              </p>
            </div>
            <div className="mt-10 sm:mt-6">
              <p className={`${style.detailPara} `}>
                Top Level Domain:{" "}
                <span className={style.detailSpan}>{info.tld[0]}</span>
              </p>
              <p className={`${style.detailPara} `}>
                Currencies:{" "}
                <span className={style.detailSpan}>
                  {info.currencies[Object.keys(info.currencies)[0]].name}
                </span>
              </p>
              <p className={`${style.detailPara} `}>
                Languages:{" "}
                <span className={style.detailSpan}>
                  {Object.values(info.languages).join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-7">
            <h3 className="text-lightmodetext text-xl font-semibold dark:text-white">
              Border Countries:
            </h3>
            <div className="flex flex-row gap-4 mt-6 max-w-md flex-wrap">
              {info.borders
                ? info.borders.map((ele, index) => (
                    <div
                      key={index}
                      className="w-24 h-14 bg-white drop-shadow-md flex flex-row items-center justify-center font-nonito  tracking-wider 
                     duration-300  dark:bg-darkmodeelements"
                    >
                      <h3 className="text-center text-xl dark:text-white text-lightmodetext">
                        {ele}
                      </h3>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-gray-400 text-center mt-24 font-nonito">Loading...</p>
  );
}

export default CountryDetail;
