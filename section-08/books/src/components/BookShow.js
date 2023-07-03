import { useContext, useState } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDeleteBookById } = useContext(BooksContext);

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
