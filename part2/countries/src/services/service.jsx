import axios from "axios";
const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY;
const countriesUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const getAllCountries = async () => {
  const response = await axios.get(countriesUrl);
  return response.data;
};

const getWeather = async (lat, long) => {
  const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${weather_api_key}`;
  const response = await axios.get(weatherUrl);
  return response.data;
};

export default { getAllCountries, getWeather };
