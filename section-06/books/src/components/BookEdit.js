import { useState } from "react";

function BookEdit({ book, onEditBookById, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditBookById(book.id, title);
    onSubmit();
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" type="text" value={title} onChange={handleChange} />
      <button className="button is-primary" type="submit">Save</button>
    </form>
  );
}

export default BookEdit;
