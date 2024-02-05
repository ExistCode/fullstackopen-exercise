const Filter = ({ handleCountry }) => {
  return (
    <div>
      find countries <input onChange={handleCountry} />
    </div>
  );
};

export default Filter;
