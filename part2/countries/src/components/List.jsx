import Country from "./Country";
const List = ({ countries, handleShow }) => {
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
export default List;
