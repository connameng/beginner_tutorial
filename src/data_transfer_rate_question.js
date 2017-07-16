// Filters out routers that are overly powerful or that are not powerful enough. 
// To do: - add section about how to find out which plan they are on. 

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

class DataTransferQuestion extends Component {
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
		this.props.handleDataTransferAnswer(e);
	}

// questions
	render () {
		console.log("DataTransfer_question: ", this.props)
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12"> How fast is the theoretical Download/Upload speed on your internet service provider plan? [Data transfer rate question]
 						<div className="radio">
							<label>
							<input type="radio" value="1" checked={this.state.answer === '1'} onChange={this.handleOptionChange}/>
								Less than 100 Mbps
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="2" checked={this.state.answer === '2'} onChange={this.handleOptionChange} />
								Greater than 100 Mbps
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

export default DataTransferQuestion
