import Language from "./Language";
import List from "./List";
import Many from "./Many";
const Countries = ({ countries, handleShow }) => {
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
    return <Many />;
  } else {
    return <List countries={countries} handleShow={handleShow} />;
  }
};
export default Countries;
