const Person = ({ person, handleShowInput, handleDelete }) => (
  <p onClick={handleShowInput}>
    {person.name} {person.number} <button onClick={handleDelete}>Delete</button>
  </p>
);

export default Person;
