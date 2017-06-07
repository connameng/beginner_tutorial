
import React, { Component } from 'react'
import Header from './header'
import Questions from './questions'
import Routers from './routers'


class App extends Component {
  render() {
    return (
      <div>  
      <Header/>
      <Questions /> 
      <Routers />
     </div>
    );
  }
}

export default App
