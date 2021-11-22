import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';

function App() {
  return (
    // <div className="App">
    //   <h1>Test</h1>
    // </div>
  <Router>
    <Header />
    <Switch>
    <h1>Test</h1>
    </Switch>
  </Router>
  );
}

export default App;
