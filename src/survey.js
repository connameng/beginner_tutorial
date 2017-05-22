import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Results from './resultspage';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Results">Results</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/Results" component={Results}/>
    </div>
  </Router>
)

class Survey extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          SurveyComponent - This is where the survey questions will go.
        </p>
         <BasicExample/>
      </div>

    );
  }
}

export default Survey;


