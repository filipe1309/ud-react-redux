import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDeleteBookById = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  const handleCreateBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });
    const newBook = response.data;
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
      <h1>Reading List</h1>
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
