import React, { Component } from 'react';
import './App.css';
import Room_question from './room_question'

// this should hold my state since it's the highest component that will use them. Both questions and results will use the state 
class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      someVar: ''
    }
    // name handleAnswers whatever 
    this.handleAnswers = this.handleAnswers.bind(this)
  }

  handleAnswers(e) {
    // prevents page from reloading 
    e.preventDefault()
    this.setState({
      someVar: e.target.value
    })
  }

  render() {

    return (
      <div style={{
        float: 'left',
        padding: '10px',
        width: '45%',
        background: '#f0f0f0'
      }}>

        {this.state.someVar}
          <Room_question handleAnswers={this.handleAnswers}/>

        </div>

    );   
  }
}



export default Questions;

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
