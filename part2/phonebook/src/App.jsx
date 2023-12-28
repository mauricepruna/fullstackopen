import { useState } from "react";
import Person from "./components/Person";
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const addPerson = (event) => {
    event.preventDefault();
    const filtered_persons = persons.filter(
      (element) => element.name === newName
    );
    if (filtered_persons.length > 0) {
      alert(`${newName} is already added at the phonebook`);
    } else {
      const newPerson = {
        name: newName,
      };

      setPersons(persons.concat(newPerson));
      setNewName("");
    }
  };
  const handleNewName = (event) => {
    const new_name = event.target.value;
    console.log(new_name);
    setNewName(new_name);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        {/* <div>
          number: <input value={newName} onChange={handleNewName} />
        </div> */}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, index) => (
          <Person key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
