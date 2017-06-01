
import React, { Component } from 'react'
import Header from './header'
{/* import Search from './Search' and import Search.js */}
import Body from './body'
import Results from './resultspage'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>  
      <Header/>
      <Body/>
     {/* while i'm playing around with JSON loader} <Search/> */}
      <Results />
      <Footer/>
     </div>
    );
  }
}

export default App
