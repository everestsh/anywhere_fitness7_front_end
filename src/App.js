import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;

