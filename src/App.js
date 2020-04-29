import React from 'react';

import ApiFilter from './components/ApiFilter'
import APIPixabay from './components/APIPixabay'
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <APIPixabay />
      <ApiFilter />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/mainpage" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
