import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
// import Classes from './components/Classes';
import ClassList from './components/ClassList';

function App() {
  return (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/classes" component={ClassList}/>
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;

