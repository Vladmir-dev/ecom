import React from 'react';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header'
import './App.css';

function App() {
  return (
    <div className="w-screen">
    <Header />
      <Carousel />
    </div>
  );
}

export default App;
