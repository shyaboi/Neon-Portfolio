import React from 'react';
import './App.css';
import neckbard from './imgs/neckbard.jpg'
import github from './imgs/github.png'
import linkedIn from './imgs/linked.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={neckbard} alt="Logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Ian Sears
          <p>  github<img src={github} alt="Logo" href="https://shyaboi.github.io/"/>
           </p>
        </a>
      </header>
   
  );
}

export default App;
