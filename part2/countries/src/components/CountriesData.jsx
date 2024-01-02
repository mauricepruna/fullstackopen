import Language from "./Language";
const CountriesData = ({ country, weather }) => {
  let weatherInfo = <div />;
  if (weather) {
    weatherInfo = (
      <div>
        <h3>Weather in {country.capital}</h3>
        <p>Temperature: {weather.current.temp} Celsius</p>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`}
            alt={weather.current.weather[0].description}
          />
          <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
            {weather.current.weather[0].description}
          </div>
        </div>
        <p>Wind: {weather.current.wind_speed} m/s</p>
      </div>
    );
  }
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
      {weatherInfo}
    </div>
  );
};
export default CountriesData;
