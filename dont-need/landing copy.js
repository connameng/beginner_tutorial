
import React, { Component } from 'react'
import Header from './header'
import Survey from './survey'
import Footer from './footer'

class Landing extends Component {
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

export default Landing