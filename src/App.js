import React from 'react';
import GameSession from './components/GameSession'

import './App.css';
import APIPixabay from './components/APIPixabay'

function App() {
  return (
    <div className="App">
      <GameSession/>
      <APIPixabay />
    </div>
  );
}

export default App;
