// filters out routers that are not less than X of what the user selects. 
// To Do: - need to make an if statement like the lan ports. Just have it filter out for 1 and 2 

import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Speed_question from './speed_question'

// const BasicExample = () => (
//   <Router>
//     <div>
//     	<button><Link to="/Speed_question">next question</Link></button>
//       <hr/>
//         <Route path="/Speed_question" component={Speed_question}/>
//     </div>
//   </Router>
// )

class PriceQuestion extends Component {
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
		this.props.handlePriceAnswer(e);
	}

// Question and answer options as buttons 
	render () {
		console.log("Price_question: ", this.props)
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">How much would you like to spend? [Price range question]
 						<div className="radio">
							<label>
							<input type="radio" value="1" checked={this.state.answer === '1'} onChange={this.handleOptionChange}/>
								$100 or less	
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="2" checked={this.state.answer === '2'} onChange={this.handleOptionChange} />
								$200 or less
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="" checked={this.state.answer === ""} onChange={this.handleOptionChange} />
								Any price - just get me the best! 
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

export default PriceQuestion
