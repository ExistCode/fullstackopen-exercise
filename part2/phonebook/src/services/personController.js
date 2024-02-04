import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createNewPerson = (person) => {
  const request = axios.post(baseUrl, person);
  return request.then((response) => response.data);
  // return request.then((response) => response.data);
};

const updatePerson = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson);
  return request.then((response) => response.data);
  // return request.then((response) => response.data);
};

const removePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
  // return request.then((response) => response.data);
};

export default { getAllPersons, createNewPerson, updatePerson, removePerson };
