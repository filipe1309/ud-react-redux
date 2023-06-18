import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimal] = useState([]);

  const renderedAnimals = animals.map(
    (animal, idx) => <AnimalShow key={idx} type={animal} />
  );

  const handleClick = () => setAnimal([...animals, getRandomAnimal()]);

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list" >{renderedAnimals}</div>
    </div>
  );
}

export default App;
