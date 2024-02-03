const Persons = ({ person, deleteController }) => {
  return (
    <li>
      {person.name} {person.number}{" "}
      <button onClick={() => deleteController(person.id)}>delete</button>
    </li>
  );
};

export default Persons;
