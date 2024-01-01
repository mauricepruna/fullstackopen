import { useState, useEffect } from "react";
import service from "../services/service";

import Language from "./Language";
import List from "./List";
import Many from "./Many";
const Countries = ({ countries, handleShow }) => {
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
    console.log(weather);
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>
          Capital: {country.capital}
          <br />
          Area: {country.area}
        </p>
        <div>
          <b>languages:</b>
          <ul>
            {Object.values(country.languages).map((value, key) => (
              <Language key={key} language={value} />
            ))}
          </ul>
          <img src={country.flags.png} alt={country.flags.alt} />
        </div>
      </div>
    );
  } else if (countriesNum > 10) {
    return <Many />;
  } else {
    return <List countries={countries} handleShow={handleShow} />;
  }
};
export default Countries;
