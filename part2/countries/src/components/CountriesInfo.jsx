import { useState, useEffect } from "react";
import service from "../services/service";

import Countries from "./Countries";
import ManyMatches from "./ManyMatches";
import CountriesData from "./CountriesData";
const CountriesInfo = ({ countries, handleShow }) => {
  const [weather, setWeather] = useState(null);

  const countriesNum = countries.length;
  useEffect(() => {
    async function fetchData() {
      if (countriesNum == 1) {
        const [lat, long] = countries[0].capitalInfo.latlng;

        const fetchedWeather = await service.getWeather(lat, long);
        setWeather(fetchedWeather);
      }
    }
    fetchData();
  }, [countries, countriesNum]);
  if (countriesNum == 1) {
    const country = countries[0];
    return <CountriesData country={country} weather={weather} />;
  } else if (countriesNum > 10) {
    return <ManyMatches />;
  } else {
    return <Countries countries={countries} handleShow={handleShow} />;
  }
};
export default CountriesInfo;
