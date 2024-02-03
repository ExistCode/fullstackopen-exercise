import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const createNewPerson = (person) => {
  return axios.post(baseUrl + person);
};

const update = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson);
};

export default { getAll, createNewPerson, update };
