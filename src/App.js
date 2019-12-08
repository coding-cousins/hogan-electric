import React from 'react';
import './App.css';
import Landing from './components/landing/Landing';
import Header from './components/header/Header';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <About/>
    </div>
  );
}

export default App;
