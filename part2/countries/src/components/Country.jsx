const Country = ({ country, handle }) => {
  return (
    <p>
      {country.name.common} <button onClick={handle}>Show</button>
    </p>
  );
};
export default Country;
