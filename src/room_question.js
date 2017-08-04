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
			
			<div className="mycontainer">
				<div>
   					<h3 className='question-text'> How many rooms is your home/ apartment? [Range/ antenna question]
					</h3>
					<h2 className="subquestion-text"> This will help determine the router range. Note: number of antennas does not correlate directly with range.
					</h2>
   					<div className="answer-row">
   						<Link to="/NumDevicesQuestion">
 							<div>
								<button className="radio" value="<4" onClick={this.handleOptionChange}>
									Studio-2 bedroom
								</button>
							</div>
							<div>
								<button className="radio" value=">4"  onClick={this.handleOptionChange} >
									3+ bedrooms 
								</button>
							</div>
						</Link>
							{/* <div>
							// 	<button className="radio" value=""  onClick={this.handleOptionChange} >
							// 		Clear  
							// 	</button>
							// </div>
							*/}
						<Link to="/">
							<div className='radio'>
								Back
							</div>
						</Link>
					</div>
				</div>
			</div>
			)
		}
	}

export default RoomQuestion
