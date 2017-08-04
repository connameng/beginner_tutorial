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
			<div className="container">
				<div className="row">
					<div className="col-sm-12">How many devices do you have on the network? (laptops/gaming systems/cell phones/ TVs etc.) [MIMO question] 
					<Link to="/ParentalQuestion">
 						<div className="radio">

							<button value="" onClick={this.handleOptionChange}>
								Less than 8
							</button>
						</div>
						<div className="radio">

							<button value="TRUE" onClick={this.handleOptionChange} >
								More than 8
							</button>
						</div>
					</Link>
					<Link to="/RoomQuestion">
						<div className="radio">

							<button value="" onClick={this.handleOptionChange} >
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

export default NumDevicesQuestion
