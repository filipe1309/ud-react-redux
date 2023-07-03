import { useContext } from "react";
import BookContext from "../context/books";
import BookShow from "./BookShow";

function BookList({ books, onDeleteBookById, onEditBookById }) {
  const { count, incrementCount } = useContext(BookContext);
  const renderedBooks = books.map(book => {
    return <BookShow 
      key={book.id} 
      book={book} 
      onDeleteBookById={onDeleteBookById} 
      onEditBookById={onEditBookById}
    />;
  });

  return <div className="book-list" >
    <h2>{count}</h2>
    <button onClick={incrementCount}>Increment</button>
    {renderedBooks}
  </div>;
}

export default BookList;
