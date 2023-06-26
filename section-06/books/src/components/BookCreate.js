import { useState } from 'react';

function BookCreate({ onCreateBook }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateBook(title);
    setTitle('');
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
}

export default BookCreate;
