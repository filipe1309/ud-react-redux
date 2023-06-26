import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const newBook = { title };
    setBooks([...books, newBook]);
  }

  return (
    <div>
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
