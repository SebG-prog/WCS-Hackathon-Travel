import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/mainpage" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
