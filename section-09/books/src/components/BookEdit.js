import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { handleEditBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    handleEditBookById(book.id, title);
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
