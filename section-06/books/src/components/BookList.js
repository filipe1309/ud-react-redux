import BookShow from "./BookShow";

function BookList({ books, onDeleteBookById }) {
  const renderedBooks = books.map(book => {
    return <BookShow key={book.id} book={book} onDeleteBookById={onDeleteBookById} />;
  });

  return <div className="book-list" >{renderedBooks}</div>;
}

export default BookList;
