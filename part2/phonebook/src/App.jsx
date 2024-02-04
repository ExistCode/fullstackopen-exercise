import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import AddPersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personController from "./services/personController";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetching data from json-server
  useEffect(() => {
    personController.getAllPersons().then((person) => {
      setPersons(person);
      setFilteredPerson(person);
    });
  }, []);
  // console.log("rendered", persons.length, "persons");
  // console.log(persons);

  // Handling and setting the hooks
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  // delete Person by Id:
  const deletePersons = (id) => {
    const personDeleted = persons.filter((person) => person.id === id);
    console.log(personDeleted);

    const personName = personDeleted[0].name;
    const personId = personDeleted[0].id;
    console.log(personName);
    console.log(personId);
    if (
      window.confirm(
        `Are you sure you want to delete this person? ${personName}`
      )
    ) {
      personController.removePerson(personId);
      window.alert(`${personName} deleted successfully`);
    }
    setErrorMessage(`${personName} deleted successfully`);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
    setFilteredPerson(
      filteredPerson.filter((person) => person.id !== personId)
    );
    setPersons(filteredPerson);
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
  console.log(errorMessage);
  const submitPersons = (event) => {
    event.preventDefault();
    const person = persons.filter((person) => person.name === newName);

    const personToAdd = person[0];
    const updatedPerson = { ...personToAdd, number: newNumber };

    if (newName !== "" && newNumber !== "") {
      if (person.length !== 0) {
        if (
          window.confirm(
            `${personToAdd.name} already exists on the phonebook. You want to update the phone number?`
          )
        ) {
          personController
            .updatePerson(updatedPerson.id, updatedPerson)
            .then((personToAdd) => {
              console.log(`${personToAdd.name} updated)`);
              window.alert(`${personToAdd.name} is already updated`);
              setFilteredPerson(
                persons.map((updatedPerson) =>
                  updatedPerson.id !== personToAdd.id
                    ? updatedPerson
                    : personToAdd
                )
              );
              setErrorMessage(`${personToAdd.name} updated successfully`);
              setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
              setNewName("");
              setNewNumber("");
              setPersons(filteredPerson);
            });
        }
      } else {
        const personToAdd = {
          name: newName,
          number: newNumber,
        };
        console.log(personToAdd);
        personController.createNewPerson(personToAdd).then((person) => {
          setErrorMessage(`${personToAdd.name} added successfully`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setFilteredPerson(persons.concat(person));
          setPersons(filteredPerson);

          setNewName("");
          setNewNumber("");
          window.alert(`${person.name} successfully added`);
        });
      }
    } else {
      window.alert("Input cannot be empty");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter onChange={filterBySearch} />
      <br />
      <AddPersonForm
        onSubmit={submitPersons}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <br />
      <h2>Numbers</h2>

      {filteredPerson.map((person) => {
        return (
          <Persons
            key={person.id}
            person={person}
            deleteController={deletePersons}
          />
        );
      })}
    </div>
  );
};

export default App;
