// Done. Filters out routers who only have 2.4ghz if user selects they live in an apartement. 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FrequencyQuestion extends Component {
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
		this.props.handleFrequencyAnswer(e);
	}

// questions
	render () {
		console.log("Frequency_question: ", this.props)
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">Do you live in an apartment complex/ city where there are many current wifi networks? [Frequency band question]
 						<Link to="/DataTransferQuestion">
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
						<Link to="/ParentalQuestion">
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

export default FrequencyQuestion
