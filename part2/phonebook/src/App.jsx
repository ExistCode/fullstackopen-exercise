import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPersons = (event) => {
    event.preventDefault();
    const duplicateIndex = persons.findIndex(
      (person) => person.name === newName
    );
    const personObject = {
      name: newName,
    };

    if (duplicateIndex !== -1) {
      window.alert(`${newName} already exists`);
      setNewName();
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      console.log(event.target);
    }
  };

  const handleNewPersons = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handleNewPersons} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => {
        return <p>{person.name}</p>;
      })}
    </div>
  );
};

export default App;
