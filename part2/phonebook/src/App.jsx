import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/persons");
      setPersons(response.data);
    }
    fetchData();
  }, []);
  const addPerson = (event) => {
    event.preventDefault();
    const check_persons = persons.filter((element) => element.name === newName);
    if (check_persons.length > 0) {
      alert(`${newName} is already added at the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };
  const handleNewName = (event) => {
    const new_name = event.target.value;
    console.log(new_name);
    setNewName(new_name);
  };
  const handleNewNumber = (event) => {
    const new_number = event.target.value;
    console.log(new_number);
    setNewNumber(new_number);
  };
  const handleFilteredName = (event) => {
    const filter_element = event.target.value;
    console.log(filter_element);
    setFilteredName(filter_element);
  };
  const persons_filtered =
    filteredName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filteredName)
        );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={filteredName} handle={handleFilteredName} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        name={newName}
        handleName={handleNewName}
        number={newNumber}
        handleNumber={handleNewNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons_filtered} />
    </div>
  );
};

export default App;
