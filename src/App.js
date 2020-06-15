import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import Profile from './pages/Profile';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/posts" component={Post} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
