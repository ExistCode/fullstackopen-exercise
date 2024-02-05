import { useEffect, useState } from "react";
import Content from "./components/Content";
import Filter from "./components/Filter";
import country from "./services/country";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [filter, setFilter] = useState("");
  console.log(`${countries.length} countries updated`);

  useEffect(() => {
    country.getAllCountries().then((country) => {
      console.log("Countries fetched");
      setAllCountries(country);
    });
  }, []);

  const handleCountry = (event) => {
    const query = event.target.value;
    setFilter(query);
    console.log(query);
    if (filter) {
      const regex = new RegExp(filter, "i");
      const updatedCountry = () =>
        allCountries.filter((country) => country.name.common.match(regex));
      setCountries(updatedCountry);
    }
    console.log(`${countries.length} countries updated`);
    console.log(countries);
  };
  if (allCountries.length !== 0) {
    return (
      <div>
        <Filter value={filter} handleCountry={handleCountry} />
        <Content
          countries={filter === "" ? allCountries : countries}
          setCountries={setCountries}
        />
      </div>
    );
  } else {
    return null;
  }
}

export default App;
