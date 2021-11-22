import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
  <Router>
    <Header />
    <Switch>
    <h1>Test</h1>
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
