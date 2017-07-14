import React, { Component } from 'react'
import preload from '../public/routerdata.json'
import ShowCard from './ShowCard'

class Routers extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    console.log(this.props.userAnswers[0])
    var antennaAnswer = this.props.userAnswers[0]
    if(!antennaAnswer) {
      antennaAnswer = ""
    }
    var priceAnswer = this.props.userAnswers[1]
    if(!priceAnswer) {
      priceAnswer = ""
    }
    return (
       <div> 
        <h3 style={{marginTop: 0}}> Here are your Routers: </h3>
          <div className="search">
          {preload.routers.filter( 
            router => router['antennas_value (1=<3; 2>3;3=6+or mesh_network)'].indexOf(antennaAnswer) >= 0
            )
          .filter(router => router['price_value (0-100=1;100-200=2;200+=3)'].indexOf(priceAnswer) >= 0)
          .map( router => <ShowCard key={router.ASIN} {...router}/>)
          }
          </div>
    </div>
    )
  }
}

// change indexOf to .contains -- have userAnswers be an array [] --  this.props.allAnswers
export default Routers
