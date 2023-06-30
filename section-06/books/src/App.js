import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const newBook = { 
      id: Math.round(Math.random() * 9999), 
      title 
    };
    setBooks([...books, newBook]);
  }

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
