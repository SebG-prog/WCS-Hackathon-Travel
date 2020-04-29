import React from 'react';
import GameSession from './components/GameSession'

import './App.css';
import APIPixabay from './components/APIPixabay'
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      {/* <GameSession/> */}
      <APIPixabay />
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/mainpage" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
