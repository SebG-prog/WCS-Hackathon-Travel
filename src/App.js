import React from 'react';

import ApiFilter from './components/ApiFilter'
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';


import './App.css';
import ApiWindy from './components/ApiWindy';

function App() {
  return (
    <div className="App">
      <ApiWindy />
      <ApiFilter />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/mainpage" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
