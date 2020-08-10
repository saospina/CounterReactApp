import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstApp } from './FirstApp';
import Counter from './Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter value={10}/>
      </header>
    </div>
  );
}

export default App;
