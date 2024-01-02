import { useState, useRef, useEffect } from "react";
import service from "./services/service";
import Notification from "./components/Notification";
import CountriesInfo from "./components/CountriesInfo";
const App = () => {
  const [filtered, setFiltered] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState(null);
  const fetchedCountries = useRef(null);
  useEffect(() => {
    async function fetchData() {
      fetchedCountries.current = await service.getAllCountries();
      setCountries(fetchedCountries);
    }
    fetchData();
  }, []);
  const handleChange = (event) => {
    const filtered = event.target.value;
    setCountries(fetchedCountries.current);
    setFiltered(filtered);
  };
  const handleShow = (country) => {
    setCountries([country]);
    setFiltered(country.name.common.toLowerCase());
  };

  const countries_filtered =
    filtered === ""
      ? []
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(filtered)
        );

  if (!countries) {
    return null;
  }

  return (
    <div>
      <Notification message={message} error={error} />
      <div>
        filter shown with: <input value={filtered} onChange={handleChange} />
      </div>
      <CountriesInfo countries={countries_filtered} handleShow={handleShow} />
    </div>
  );
};

export default App;
