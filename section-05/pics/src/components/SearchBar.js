import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
         <label htmlFor="search">Enter Search Term</label>
        <input type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
