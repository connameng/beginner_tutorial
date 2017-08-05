// If they have over 8 devices, put MIMO filter = true 
// To do: none
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NumDevicesQuestion extends Component {
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
		this.props.handleNumDevicesAnswer(e);
	}

// questions
	render () {
		console.log("NumDevices_question: ", this.props)
		return (
			<div className="mycontainer">
				<div>
					<h3 className='question-text'> How many devices do you have on the network? (laptops/gaming systems/cell phones/ TVs etc.) [MIMO question] 
					</h3>
					<h2 className="subquestion-text"> There's a feature called MIMO that is a great technology which helps with multiple devices. 
					</h2>
					<Link to="/ParentalQuestion">
 						<div>
							<button className="radio" value="" onClick={this.handleOptionChange}>
								Less than 8
							</button>
						</div>
						<div>

							<button className="radio" value="TRUE" onClick={this.handleOptionChange} >
								More than 8
							</button>
						</div>
					</Link>
					<Link to="/RoomQuestion">
						<div>
							<button className="radio" value="" onClick={this.handleOptionChange} >
								Back  
							</button>
						</div>
					</Link>
				</div>	
			</div>
			)
		}
	}

export default NumDevicesQuestion
