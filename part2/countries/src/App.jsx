import { useState, useEffect } from "react";
import service from "./services/service";
import Notification from "./components/Notification";
const App = () => {
  const [filteredCountry, setFilteredCountry] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  return (
    <div>
      <Notification message={message} error={error} />
      <div>
        filter shown with: <input value={filteredCountry} onChange={handle} />
      </div>
    </div>
  );
};

export default App;
