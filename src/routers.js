import React, { Component } from 'react'
import preload from '../public/routerdata.json'
import ShowCard from './ShowCard'

class Routers extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    console.log(this.props)
    return (
       <div> 
        <h3 style={{marginTop: 0}}> Here are your Routers: </h3>
          <div className="search">
          {preload.routers.filter( 
            router => router.antennas.indexOf(this.props.userAnswers) >= 0
            )
          .map( router => <ShowCard key={router.ASIN} {...router}/>)
          }
          </div>
    </div>
    )
  }
}

// change indexOf to .contains -- have userAnswers be an array [] --  this.props.allAnswers
export default Routers
