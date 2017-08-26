// 	filters out routers that are not in range 
// To Do: 

import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class PriceQuestion extends Component {
	// everytime render component takes prop from parent 
	constructor(props,context) {
		super(props,context);
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
		this.props.handlePriceAnswer(e);
	}


	render () {
		return (

			<div className="mycontainer">
				<div>
   					<h3 className='question-text'> How much would you like to spend? 
					</h3>
					<h2 className="subquestion-text"> This is your maximum budget you’d like to spend, an important thing to set first before looking at different features. Note: if you do not see any routers, please turn off your add blocker. Also, you might need to pay more if you require more features.
					</h2>
   					<Link to="/RoomQuestion">
   						<div className='row'>

								<button className="my-button" value="<100" onClick={this.handleOptionChange}>
									<b>$100</b> or less
								</button>

								<button className="my-button"  value="<150" onClick={this.handleOptionChange}>
									<b>$150</b> or less
								</button>

						</div>
						<div className='row'>

								<button className="my-button" value="<200" onClick={this.handleOptionChange}>
									<b>$200</b> or less
								</button>

								<button className="my-button"  value="anyprice" onClick={this.handleOptionChange}>
									Any price - just get me the best! 
								</button>

						</div>
					</Link>
				</div>	
			</div>
			)
		}
	}

export default PriceQuestion



