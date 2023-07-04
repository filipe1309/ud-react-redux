import { createContext, useCallback, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  const handleDeleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter(book => book.id !== id));
  }

  const handleCreateBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });
    const newBook = response.data;
    setBooks([...books, newBook]);
  }

  const handleEditBookById = async (id, title) => { 
    const response = await axios.put(`http://localhost:3001/books/${id}`, { 
      title 
    });
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return response.data;
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  const valueToShare = {
    books,
    fetchBooks,
    handleDeleteBookById,
    handleCreateBook,
    handleEditBookById
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
