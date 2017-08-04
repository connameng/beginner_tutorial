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
				<div className="">
   					<h3 >How much would you like to spend? [Price range question] 
					</h3>
   					<Link to="/RoomQuestion">
 						<div >
							<button className="radio" value="<100" onClick={this.handleOptionChange}>
								<b>$100</b> or less
							</button>
						</div>
 						<div >
							<button className="radio"  value="<150" onClick={this.handleOptionChange}>
								<b>$150</b> or less
							</button>
						</div>
 						<div >
							<button className="radio" value="<200" onClick={this.handleOptionChange}>
								<b>$200</b> or less
							</button>
						</div>
 						<div >
							<button className="radio"  value="anyprice" onClick={this.handleOptionChange}>
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



