const CountryForm = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital}</p>
      <p>area: {country.area}</p>

      <img src={country.flags.png} alt="Country flag" width={100}></img>
    </div>
  );
};

export default CountryForm;
