import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Questions from './questions'
import Results from './resultspage'

// this should hold my state since it's the highest component that will use them. Both questions and results will use the state 

class Body extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Route exact path="/*" component={Questions} />
          <Results />
        </div>
      </Router>
    );
  }
}

export default Body;
// <Route path="/results" component={Results} />

// import React, { Component } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Results from './resultspage'
// import Questions from './questions'

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/Results">Results</Link></li>
//       </ul>
//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/Results" component={Results}/>
//     </div>
//   </Router>
// )

// class Body extends Component {
//   render() {
//     return (
//       <div>
//         <p className="App-intro">
//           BodyComponent.
//         </p>
//          <Questions/>
//          <BasicExample/>
//       </div>

//     );
//   }
// }

// export default Body;
