import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const handleDeleteBookById = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  const handleCreateBook = (title) => {
    const newBook = { 
      id: Math.round(Math.random() * 9999), 
      title 
    };
    setBooks([...books, newBook]);
  }

  const handleEditBookById = (id, title) => { 
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <BookList 
        books={books} 
        onDeleteBookById={handleDeleteBookById} 
        onEditBookById={handleEditBookById}
      />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
