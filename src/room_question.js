// filter out the routers without enough antennas for the larger places. 
// To Do: 

import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import PriceQuestion from './price_question'

// need to figure out how to pass the state through the router 
// const BasicExample = (props) => (
//   <Router>
//     <div>{this}
//     	<button><Link to={{pathname: "/Price_question", state: {  }}}>next question</Link></button>
//       <hr/>
//         <Route path="/Price_question" component={PriceQuestion}/>
//     </div>
//   </Router>
// )

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
						<div className="radio">
							<label>
							<input type="radio" value="<4" checked={this.state.answer ==='<4'} onChange={this.handleOptionChange}/>
								Studio-2 bedroom
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value=">4" checked={this.state.answer === '>4'} onChange={this.handleOptionChange} />
								3+ bedrooms 
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="" checked={this.state.answer === ''} onChange={this.handleOptionChange} />
								clear field  
							</label>
						</div>
					</div>
				</div>
			</div>
			)
		}
	}

export default RoomQuestion
