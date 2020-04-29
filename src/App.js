import React from 'react';
import { Route, Switch } from "react-router-dom";
import APIPixabay from './components/APIPixabay'
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';


import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/mainpage" component={MainPage} />
        <Route path="/APIPixabay" component={APIPixabay} />
      </Switch>
    </div>
  );
}

export default App;
