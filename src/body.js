import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Results from './resultspage'
import Questions from './questions'

class Body extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Questions} />
          <Route path="/results" component={Results} />
        </div>
      </Router>

    );
  }
}

export default Body;
