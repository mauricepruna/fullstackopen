import Country from "./Country";
import Language from "./Language";
const Countries = ({ countries }) => {
  if (countries.length == 1) {
    const country = countries[0];
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
  } else if (countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter.</p>
      </div>
    );
  } else {
    return (
      <div>
        {countries.map((country) => (
          <Country key={country.name.official} country={country} />
        ))}
      </div>
    );
  }
};
export default Countries;
