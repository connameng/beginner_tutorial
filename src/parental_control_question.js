// Filters out the routers which are not spceifified for parental controls if user selects they want to filter/restrict activiity on the internet.
// To Do: - add a section about open source firmware if they want to get any router, but be able to add parental controls.

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ParentalQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: "5"
		};

		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.setState({
			answer: e.target.value
		});
		this.props.handleParentalAnswer(e);
	}

// questions
	render () {
		console.log("Parental_question: ", this.props)
		return (
			<div className="mycontainer">
					<h3 className='question-text'> Are you a parent and want to be able to filter/restrict activity on the internet (set up time windows or restricted sites) [Parental controls]
					</h3>
					<h2 className="subquestion-text"> Some routers have a specialty in parental controls.
					</h2>
					<Link to="/FrequencyQuestion">
						<div >
							<button className="radio" value="TRUE" onClick={this.handleOptionChange}>
								Yes
							</button>
						</div>
						<div >
							<button className="radio" value="" onClick={this.handleOptionChange} >
								No
							</button>
						</div>
					</Link>
					<Link to="/NumDevicesQuestion">
						<div>
							<button className="radio" value=""  onClick={this.handleOptionChange} >
								Back  
							</button>
						</div>
					</Link>
			</div>
			)
		}
	}

export default ParentalQuestion
