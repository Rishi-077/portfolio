import React from 'react';
import './App.css';
import Home from './components/Home';
import Navitem from './components/Navitem';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navitem />
      <Home />
      <About />
    </div>
  );
}

export default App;
