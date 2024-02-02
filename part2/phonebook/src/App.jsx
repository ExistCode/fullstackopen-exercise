import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPersons = (event) => {
    event.preventDefault();
    const duplicateIndex = persons.findIndex((person) => {
      return person.name === newName || person.number === newNumber; // Combine conditions
    });
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (newName !== "" && newNumber !== "") {
      if (duplicateIndex !== -1) {
        window.alert(`${newName} or ${newNumber} already exists`);
        setNewName("");
      } else {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
        console.log(event.target);
      }
    } else {
      window.alert("Input cannot be empty");
    }
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => {
        return (
          <p>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
