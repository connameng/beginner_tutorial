
import React, { Component } from 'react'
import Header from './header'
import Survey from './survey'
import Footer from './footer'


class App extends Component {
  render() {
    return (
      <div>  
      <Header/>
      <Survey/> 
      <Footer/>
     </div>
    );
  }
}

export default App

// <a> text here </a> <Link to='/Results'> Browse all </Link> 
// import React from 'react'
// import { render } from 'react-dom'
// import { HashRouter, Match } from 'react-router'
// import Landing from './landing'

// const App = React.createClass({
//   render () {
//     return (
//       <HashRouter>
//         <div className='app'>
//           <Match exactly pattern='/' component={Landing} />
//         </div>
//       </HashRouter>
//     )
//   }
// })

// render(<App />, document.getElementById('app'))