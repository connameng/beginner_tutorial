import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Results from './resultspage'
import Questions from './questions'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Results">Results</Link></li>
      </ul>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/Results" component={Results}/>
    </div>
  </Router>
)

class Body extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          BodyComponent.
        </p>
         <Questions/>
         <BasicExample/>
      </div>

    );
  }
}

export default Body;
