
import React, { Component } from 'react'
import Header from './header'
/* import Body from './body' and import Search.js */
import Body from './body'
// import Search from './Search'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>  
      <Header/>
      <Body/>
     {/* while i'm playing around with JSON loader} <Body/> */}
      <Footer/>
     </div>
    );
  }
}

export default App
