import Country from "./Country";
const Content = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length > 2 && countries.length < 10) {
    countries.map((country) => {
      return <div>{country}</div>;
    });
  } else {
    return <Country country={countries[0]} />;
  }
};

export default Content;
