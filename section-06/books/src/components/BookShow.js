import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDeleteBookById, onEditBookById }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDeleteBookById(book.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  }

  return <div className="book-show">
    <div>{
      showEdit 
      ? <BookEdit book={book} onEditBookById={onEditBookById} onSubmit={handleSubmit} /> 
      : <h3>{book.title}</h3>
    }</div>
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  </div>;
}

export default BookShow;
