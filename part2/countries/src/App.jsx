import { useEffect, useState } from "react";
import Content from "./components/Content";
import Filter from "./components/Filter";
import country from "./services/country";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  // const [filteredCountry, setFilteredCountry] = useState([]);
  useEffect(() => {
    country.getAllCountries().then((country) => {
      console.log("Countries fetched");
      setCountries(country);
    });
  }, []);

  const handleCountry = (event) => {};
  return (
    <div>
      <Filter handleCountry={handleCountry} />
      {/* <Content countries={countries} /> */}
    </div>
  );
}

export default App;
