import { useState } from "react";
import Filter from "./components/Filter";
import AddPersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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

  // Handling and setting the hooks
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  // Filtering the search
  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const updatedPerson = persons.filter((person) => {
      return (
        person.name.toLowerCase().includes(query) ||
        person.id.toString().toLowerCase().includes(query) ||
        person.number.toLowerCase().includes(query)
      );
    });

    setFilteredPerson(updatedPerson);
  };

  const submitPersons = (event) => {
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
        setFilteredPerson(filteredPerson.concat(personObject));
        setNewName("");
        setNewNumber("");
        console.log(event.target);
      }
    } else {
      window.alert("Input cannot be empty");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filterBySearch} />
      <AddPersonForm
        onSubmit={submitPersons}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>

      {filteredPerson.map((person) => {
        return <Persons name={person.name} number={person.number} />;
      })}
    </div>
  );
};

export default App;
