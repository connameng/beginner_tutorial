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
			<div className="container">
				<div className="row">
					<div className="col-sm-12">Are you a parent and want to be able to filter/restrict activity on the internet (set up time windows or restricted sites) [Parental controls]
 						<Link to="/FrequencyQuestion">
 						<div className="radio">

							<button value="TRUE" onClick={this.handleOptionChange}>
								Yes
							</button>
						</div>
						<div className="radio">

							<button value="" onClick={this.handleOptionChange} >
								No
							</button>
						</div>
						</Link>
						<Link to="/NumDevicesQuestion">
						<div className="radio">

							<button  value=""  onClick={this.handleOptionChange} >
								Back  
							</button>
						</div>
						</Link>
					</div>
				</div>	
			</div>
			)
		}
	}

export default ParentalQuestion
