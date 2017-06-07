 
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Bandwidth_question from './bandwidth_question'

// const BasicExample = () => (
//   <Router>
//     <div>
//     	<button><Link to="/Bandwidth_question">next question</Link></button>
//       <hr/>
//         <Route path="/Bandwidth_question" component={Bandwidth_question}/>
//     </div>
//   </Router>
// )

class Room_question extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: "2bdrm"
		};

		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.setState({
			answer: e.target.value
		});
		this.props.handleRoomAnswer(e);
	}

// questions
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12"> How many rooms is your home/ apartment? [Range/ antenna question]
						<div className="radio">
							<label>
							<input type="radio" value="1bdrm" checked={this.state.answer === '1bdrm'} onChange={this.handleOptionChange}/>
								1 bedroom
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="2bdrm" checked={this.state.answer === '2bdrm'} onChange={this.handleOptionChange} />
								2+ bedrooms 
							</label>
						</div>
					</div>
				</div>
			 <div>
		        <p className="App-intro"></p>
		       {/* <BasicExample/> */} 
		     </div>

			</div>
			)
		}
	}

export default Room_question
