import React, { Component } from 'react'
import ShowCard from './ShowCard'
import preload from '../public/routerdata.json'

class Routers extends Component {
  render () {
    return (
      <div className='results' style={{ flex: 1, padding: '10px' }}>
        <div>
          {preload.routers.map(show => <ShowCard key={show.model} model={show.model} antenas={show.antenas} frequency={show.frequency} />)}
        </div>
      </div>
    )
  }
}

export default Routers
