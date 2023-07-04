import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDeleteBookById } = useBooksContext()

  const handleDeleteClick = () => {
    handleDeleteBookById(book.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  }

  return <div className="book-show">
    <img 
      src={`https://picsum.photos/seed/${book.id}/200/300`}
      alt="books"
    />
    <div>{
      showEdit 
      ? <BookEdit book={book} onSubmit={handleSubmit} /> 
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
