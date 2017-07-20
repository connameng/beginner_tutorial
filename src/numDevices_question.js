// If they have over 8 devices, put MIMO filter = true 
// To do: none
import React, { Component } from 'react'

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
 						<div className="radio">
							<label>
							<input type="radio" value="" checked={this.state.answer === ''} onChange={this.handleOptionChange}/>
								Less than 8
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="TRUE" checked={this.state.answer === 'TRUE'} onChange={this.handleOptionChange} />
								More than 8
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value=" " checked={this.state.answer === ''} onChange={this.handleOptionChange} />
								Clear field  
							</label>
						</div>
					</div>
				</div>	
			</div>
			)
		}
	}

export default NumDevicesQuestion
