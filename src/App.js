import React from 'react';
import './App.css';
import MemeGenerator from './MemeGenerator/MemeGenerator'
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
