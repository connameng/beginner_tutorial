 
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// const BasicExample = () => (
//   <Router>
//     <div>
//     	<button><Link to="/Speed_question">next question</Link></button>
//       <hr/>
//         <Route path="/Speed_question" component={Speed_question}/>
//     </div>
//   </Router>
// )

class numDevices_question extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: "y"
		};

		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.setState({
			answer: e.target.value
		});
		this.props.handleAnswers(e);
	}

// questions
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12"> How many devices do you have on the network? (laptops/gaming systems/cell phones etc.) [Protocol question] 
 						<div className="radio">
							<label>
							<input type="radio" value="y" checked={this.state.answer === 'y'} onChange={this.handleOptionChange}/>
								Greater than 5
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="n" checked={this.state.answer === 'n'} onChange={this.handleOptionChange} />
								Less than 5
							</label>
						</div>
					</div>
				</div>	
			

			</div>
			)
		}
	}

export default numDevices_question

