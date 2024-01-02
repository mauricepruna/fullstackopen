import Country from "./Country";
const Countries = ({ countries, handleShow }) => {
  return (
    <div>
      {countries.map((country) => (
        <Country
          key={country.name.official}
          country={country}
          handle={() => handleShow(country)}
        />
      ))}
    </div>
  );
};
export default Countries;
