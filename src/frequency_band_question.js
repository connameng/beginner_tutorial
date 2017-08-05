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

			<div className="mycontainer">
				<div>
					<h3 className='question-text'> Do you live in an apartment complex/ city where there are many current wifi networks? [Frequency band question]
					</h3>
					<h2 className="subquestion-text"> This will help determine which frequency router you need 2.4GHz vs 5GHz. 
					</h2>
 					<Link to="/DataTransferQuestion">
 						<div className="answer-row">
							<button className='radio' value="TRUE" onClick={this.handleOptionChange}>
								Yes
							</button>
						</div>
						<div>
							<button className='radio' value="" onClick={this.handleOptionChange} >
								No
							</button>
						</div>
						</Link>
						<Link to="/ParentalQuestion">
							<div>

								<button className='radio' value=""  onClick={this.handleOptionChange} >
									Back  
								</button>
							</div>
						</Link>
					</div>
				</div>	
			)
		}
	}

export default FrequencyQuestion
