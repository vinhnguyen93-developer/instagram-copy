import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
