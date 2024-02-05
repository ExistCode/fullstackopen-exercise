import axios from "axios";
const APIurl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAllCountries = () => {
  const request = axios.get(APIurl);
  return request.then((response) => response.data);
};

export default { getAllCountries };
