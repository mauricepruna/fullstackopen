import { useState, useEffect } from "react";
import service from "./services/service";
import Notification from "./components/Notification";
import Countries from "./components/Countries";
const App = () => {
  const [filtered, setFiltered] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedCountries = await service.getAllCountries();
      setCountries(fetchedCountries);
    }
    fetchData();
  }, []);
  const handleChange = (event) => {
    const filtered = event.target.value;
    setFiltered(filtered);
  };
  const handleShow = (country) => {
    setFiltered(country.name.common.toLowerCase());
    setCountries([country]);
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
      <Countries countries={countries_filtered} handleShow={handleShow} />
    </div>
  );
};

export default App;
