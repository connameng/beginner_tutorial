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
        <h3>Here are your Routers: </h3>
          <div className="search">
          {preload.routers.filter( 
            router => router.rooms.indexOf(this.props.userAnswers) >= 0
            )
          .map( router => <ShowCard key={router.id} {...router}/>)
          }
          </div>
    </div>
    )
  }
}

export default Routers
