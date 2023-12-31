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
      const fetchedCountries = await service.getAll();
      setCountries(fetchedCountries);
    }
    fetchData();
  }, [countries]);
  const handleChange = (event) => {
    const filtered = event.target.value;
    setFiltered(filtered);
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
      <Countries countries={countries_filtered} />
    </div>
  );
};

export default App;
