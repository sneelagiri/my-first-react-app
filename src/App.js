import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
      </main>
      <p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!
          Welcome to Codaisseur.
        </a>
        <br></br>
        I feel very positive about JavaScript and React. I think that they can be used efficiently to solve real-world problems, which businesses across the world face. 
      </p>
    </div>
  );
}

export default App;
