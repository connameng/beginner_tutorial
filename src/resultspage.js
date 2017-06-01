import React, { Component } from 'react'
import ShowCard from './ShowCard'
import preload from '../public/routerdata.json'

class Results extends Component {
  render () {
    return (
      <div className='results' style={{ flex: 1, padding: '10px' }}>
        <div>
          {preload.routers.map((show) => {
            return (
             <ShowCard model={show.model} antenas={show.antenas} frequency={show.frequency} />
            )
          })}
        </div>
      </div>
    )
  }
}


// class Results extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			answer: "option1"
// 		};

// 	}
//   render () {
//   	console.log(this.props.location.state.answer)
//   	var answer = this.props.location.state.answer ? this.props.location.state.answer : "no answer";
//     return (
//       <h1>Filtered Results here {answer}!!</h1>
//     )
//   }
// }

export default Results