// 1) Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a reference to the div with id of 'root'
const divRoot = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(divRoot);

// 4) Show the react component on the screen
root.render(<App />);
// root.render(React.createElement("h1", null, "Hi there 2!"))
