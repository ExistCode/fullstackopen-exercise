import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import AddPersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);

  // Fetching data from json-server
  useEffect(() => {
    console.log("Effect happens");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("Promise fulfilled");
      setPersons(response.data);
      setFilteredPerson(response.data);
    });
  }, []);
  console.log("rendered", persons.length, "persons");
  console.log(persons);

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
        axios
          .post("http://localhost:3001/persons", personObject)
          .then((response) => {
            console.log(response);
            setPersons(persons.concat(response.data));
            setFilteredPerson(filteredPerson.concat(response.data));
            setNewName("");
            setNewNumber("");
          });
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
