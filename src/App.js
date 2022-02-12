import React from 'react';
import './App.css';
import Home from './components/Home';
import Navitem from './components/Navitem';

function App() {
  return (
    <div className="App">
      <Navitem />
      <Home />
    </div>
  );
}

export default App;
