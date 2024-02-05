const Filter = ({ value, handleCountry }) => {
  return (
    <div>
      find countries <input value={value} onChange={handleCountry} />
    </div>
  );
};

export default Filter;
