import Person from "./Person";
const Persons = ({ persons, handleShowInput, handleDelete }) => (
  <div>
    {persons.map((person) => (
      <Person
        key={person.id}
        person={person}
        handleShowInput={() => handleShowInput(person)}
        handleDelete={() => handleDelete(persons, person)}
      />
    ))}
  </div>
);

export default Persons;
