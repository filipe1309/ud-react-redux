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

  return (
    <div className="app">
      <BookList books={books} onDeleteBookById={handleDeleteBookById} />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
