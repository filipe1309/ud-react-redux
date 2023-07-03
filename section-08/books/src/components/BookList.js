import BookShow from "./BookShow";

function BookList({ books, onDeleteBookById, onEditBookById }) {
  const renderedBooks = books.map(book => {
    return <BookShow 
      key={book.id} 
      book={book} 
      onDeleteBookById={onDeleteBookById} 
      onEditBookById={onEditBookById}
    />;
  });

  return <div className="book-list" >
    {renderedBooks}
  </div>;
}

export default BookList;
