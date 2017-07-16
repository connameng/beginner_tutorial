import React, { Component } from 'react'
import preload from '../public/routerdata.json'
import ShowCard from './ShowCard'

class Routers extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    console.log(this.props.userAnswers)
    
    var priceAnswer = this.props.userAnswers[0]
    if(!priceAnswer) {
      priceAnswer = ""
    }
     
     preload.routers.forEach(function(router) {
      if(priceAnswer === "1"){
        if(router['LAN_ports'] = 4) {
          return router
        }
      }
      if(priceAnswer === "2"){
        if(router['LAN_ports'] < 4) {
          return router
        }
      }

    var antennaAnswer = this.props.userAnswers[1]
    if(!antennaAnswer) {
      antennaAnswer = ""
    }
    var parentalAnswer = this.props.userAnswers[2]
    if(!parentalAnswer) {
    parentalAnswer = ""
    }
    var frequencyAnswer = this.props.userAnswers[3]
    if(!frequencyAnswer) {
    frequencyAnswer = ""
    }
    var dataTransferAnswer = this.props.userAnswers[4]
    if(!dataTransferAnswer) {
    dataTransferAnswer = ""
    }
    var lanPortAnswer = this.props.userAnswers[5]
    if(!lanPortAnswer) {
    lanPortAnswer = ""
    }

    preload.routers.forEach(function(router) {
      if(lanPortAnswer === ">4"){
        if(router['LAN_ports'] >= 4) {
          return router
        }
      }
      if(lanPortAnswer === "<4"){
        if(router['LAN_ports'] < 4) {
          return router
        }
      }
    })
    return (
       <div> 
        <h3 style={{marginTop: 0}}> Here are your Routers: </h3>
          <div className="search">
          {preload.routers
            .filter(router => router['antennas_value (1=<3; 2>3;3=6+or mesh_network)'].indexOf(antennaAnswer) >= 0)
            .filter(router => router['price_value (0-100=1;100-200=2;200+=3)'].indexOf(priceAnswer) >= 0)
            .filter(router => router['parent_control_specialty'].indexOf(parentalAnswer) >= 0)
            .filter(router => router['5ghz frequency'].indexOf(frequencyAnswer) >= 0)
            .filter(router => router['data_transfer_value (1=<1300; 2>1300 mbps)'].indexOf(dataTransferAnswer) >= 0)
            .filter(router => {
              if(lanPortAnswer === ">4"){
                if(router['LAN_ports'] >= 4) {
                  return router
                }
              }
              else if(lanPortAnswer === "<4"){
                if(router['LAN_ports'] < 4) {
                  return router
                }
              } else {
                return router
              }
            })
            .map( router => <ShowCard key={router.ASIN} {...router}/>)
          }
          </div>
    </div>
    )
  }
}

export default Routers
