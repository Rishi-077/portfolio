import React from 'react';
import './App.css';
import Home from './components/Home';
import Navitem from './components/Navitem';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navitem />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
