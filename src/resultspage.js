import React, { Component } from 'react'

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: "option1"
		};

	}

  render () {
  	console.log(this.props.location.state.answer)
  	var answer = this.props.location.state.answer ? this.props.location.state.answer : "no answer";
    return (
      <h1>Filtered Results here {answer}!!</h1>
    )
  }
}

export default Results
