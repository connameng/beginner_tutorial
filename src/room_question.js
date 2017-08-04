// filter out the routers without enough antennas for the larger places. 
// To Do: 

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RoomQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: "5"
		};
	// binding function handle option change to instance it's being called on. Have to do.
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.setState({
			answer: e.target.value
		});
		this.props.handleRoomAnswer(e);
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">How many rooms is your home/ apartment? [Range/ antenna question]
					<Link to="/NumDevicesQuestion">
						<div className="radio">

							<button value="<4" onClick={this.handleOptionChange}>
								Studio-2 bedroom
							</button>
						</div>
						<div className="radio">

							<button  value=">4"  onClick={this.handleOptionChange} >
								3+ bedrooms 
							</button>
						</div>
					</Link>
						<div className="radio">

							<button value=""  onClick={this.handleOptionChange} >
								Clear  
							</button>
						</div>
					<Link to="/">
						Back
					</Link>
					</div>
				</div>
			</div>
			)
		}
	}

export default RoomQuestion
