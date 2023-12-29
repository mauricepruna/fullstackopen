import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import service from "./services/service";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");
  useEffect(() => {
    async function fetchData() {
      const allPersons = await service.getAll();
      setPersons(allPersons);
    }
    fetchData();
  }, []);
  const addPerson = async (event) => {
    event.preventDefault();
    const check_persons = persons.filter((element) => element.name === newName);
    console.log(check_persons);
    if (check_persons.length > 0) {
      const p = check_persons[0];
      if (p.number !== newNumber) {
        if (
          confirm(
            `${newName} is already added at the phonebook, replace the old number with a new one?`
          )
        ) {
          const updatedPerson = {
            name: newName,
            number: newNumber,
          };
          const responseUpdatedPerson = await service.update(
            p.id,
            updatedPerson
          );
          if (responseUpdatedPerson) {
            const foundObj = persons.find((item) => item.id === p.id);
            if (foundObj) {
              foundObj.number = newNumber;
            }

            setPersons(persons);
            setNewName("");
            setNewNumber("");
          }
        }
      } else alert(`${newName} is already added at the phonebook`);
    } else if (newName !== "") {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      const responseNewPerson = await service.create(newPerson);
      setPersons(persons.concat(responseNewPerson));
      setNewName("");
      setNewNumber("");
    } else {
      alert("Insert a name to be added");
    }
  };
  const handleNewName = (event) => {
    const new_name = event.target.value;
    setNewName(new_name);
  };
  const handleNewNumber = (event) => {
    const new_number = event.target.value;
    setNewNumber(new_number);
  };
  const handleFilteredName = (event) => {
    const filter_element = event.target.value;
    console.log(filter_element);
    setFilteredName(filter_element);
  };
  const handleDelete = (persons, person) => {
    if (confirm(`Delete ${person.name}?`)) {
      service.remove(person.id);
      setPersons(persons.filter((item) => item.id !== person.id));
    }
  };
  const handleShowInput = (person) => {
    setNewName(person.name);
    setNewNumber(person.number);
  };
  const handleClear = () => {
    setNewName("");
    setNewNumber("");
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
      <br />
      <button onClick={handleClear}>clear</button>
      <h3>Numbers</h3>
      <Persons
        persons={persons_filtered}
        handleShowInput={handleShowInput}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
