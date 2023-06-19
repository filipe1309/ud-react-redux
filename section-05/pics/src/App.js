import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = (term) => {
    searchImages(term).then((images) => {
      setImages(images);
    });
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      Found: {images.length} images
    </div>
  );
}

export default App;
