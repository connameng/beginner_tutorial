// Filters out the routers which are not spceifified for parental controls if user selects they want to filter/restrict activiity on the internet.
// To Do: - add a section about open source firmware if they want to get any router, but be able to add parental controls.

import React, { Component } from 'react'

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
 						<div className="radio">
							<label>
							<input type="radio" value="TRUE" checked={this.state.answer === 'TRUE'} onChange={this.handleOptionChange}/>
								Yes
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="" checked={this.state.answer === ''} onChange={this.handleOptionChange} />
								No
							</label>
						</div>
					</div>
				</div>	
			</div>
			)
		}
	}

export default ParentalQuestion
