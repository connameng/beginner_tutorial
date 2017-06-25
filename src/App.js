
import React, { Component } from 'react'
import Header from './header'
import Questions from './questions'


class App extends Component {
  render() {
    return (
      <div>  
        <Header/>
        <Questions /> 
       </div>
    );
  }
}

export default App
