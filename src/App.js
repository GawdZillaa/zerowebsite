import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router } from 'react-router-dom'

import Navi from './Components/Navi'
import Splash from './Components/Splash/Splash'
import Login from './Components/Login/Login'
import createBrowserHistory from 'history/createBrowserHistory';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navi />
          <Route exact path="/" component={Splash} />
          <Route path="/login" component={Login} />
        </div>
      </Router>

    );
  }
}

export default App;
