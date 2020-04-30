import React from 'react';

import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import Footer from './components/Footer'
import endPage from './components/ApiWindy'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/mainpage" component={MainPage} />
        <Route path="/endpage" component={endPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
