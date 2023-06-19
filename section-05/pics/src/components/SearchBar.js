function SearchBar({ onSubmit }) {
  return (
    <div>
      <input type="text" />
      <button onClick={() => onSubmit('cars')}>Search</button>
    </div>
  );
}

export default SearchBar;
