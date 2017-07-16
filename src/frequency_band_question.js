import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// // import Speed_question from './speed_question'

// // const BasicExample = () => (
// //   <Router>
// //     <div>
// //     	<button><Link to="/Speed_question">next question</Link></button>
// //       <hr/>
// //         <Route path="/Speed_question" component={Speed_question}/>
// //     </div>
// //   </Router>
// // )

class FrequencyQuestion extends Component {
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
		this.props.handleFrequencyAnswer(e);
	}

// questions
	render () {
		console.log("Frequency_question: ", this.props)
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">Do you live in an apartment complex/ city where there are many current wifi networks? [Frequency band question]
 						<div className="radio">
							<label>
							<input type="radio" value="TRUE" checked={this.state.answer === 'TRUE'} onChange={this.handleOptionChange}/>
								Yes
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="TRUE or FALSE" checked={this.state.answer === 'TRUE or FALSE'} onChange={this.handleOptionChange} />
								No
							</label>
						</div>
					</div>
				</div>	
			</div>
			)
		}
	}

export default FrequencyQuestion
