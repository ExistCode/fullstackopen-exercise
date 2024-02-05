import CountryForm from "./CountryForm";
const Content = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length >= 2 && countries.length < 10) {
    return (
      <ul>
        {countries.map((country, i) => (
          <li key={i}>
            {" "}
            {country.name.common}{" "}
            {/* <button onClick={() => setCountries([country])}>show</button> */}
          </li>
        ))}
      </ul>
    );
  } else {
    console.log(countries[0].name.common);
    return <CountryForm country={countries[0]} />;
  }
};

export default Content;
