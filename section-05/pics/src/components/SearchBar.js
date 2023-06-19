function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit('cars');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
      </form>
    </div>
  );
}

export default SearchBar;
