import { useContext, useState } from 'react';
import BooksContext from '../context/books';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { handleCreateBook } = useContext(BooksContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateBook(title);
    setTitle('');
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" type="text" value={title} onChange={handleChange} />
        <button className="button" type="submit">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
