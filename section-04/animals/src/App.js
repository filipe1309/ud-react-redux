import { useState } from 'react';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimal] = useState([]);

  const handleClick = () => setAnimal([...animals, getRandomAnimal()]);

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <ul>
        {animals.map((animal, idx) => <li key={idx}>{animal}</li>)}
      </ul>
    </div>
  );
}

export default App;
