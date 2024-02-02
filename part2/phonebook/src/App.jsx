import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState(persons);

  // Filtering
  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    console.log(query);
    const updatedPerson = persons.filter((person) => {
      return (
        person.name.toLowerCase().includes(query) ||
        person.id.toString().toLowerCase().includes(query) ||
        person.number.toLowerCase().includes(query)
      );
    });

    setFilteredPerson(updatedPerson);
  };

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
      <div>
        filter shown with <input onChange={filterBySearch} />
      </div>
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

      {filteredPerson.map((person) => {
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
