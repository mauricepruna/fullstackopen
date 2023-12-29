const Person = ({ person, handleShowInput, handleDelete }) => (
  <p>
    <span onClick={handleShowInput}>
      {person.name} {person.number}
    </span>{" "}
    <button onClick={handleDelete}>Delete</button>
  </p>
);

export default Person;
