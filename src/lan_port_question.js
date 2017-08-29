// More than 4 needed, filter the one's out with less than 4
// To do: - add section about putting a switch on the routers with less than 4 LAN ports. 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LanPortQuestion extends Component {
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
		this.props.handleLanPortAnswer(e);
	}

// questions
	render () {
		console.log("Price_question: ", this.props)
		return (
			<div className="my-container">
				<div>
					<h3 className='question-text'> Number of lan ports? [Lan Port question]
					</h3>
					<h2 className="subquestion-text"> How many devices do you plan to plug into the back of your router? Hint: it's always faster to do this.
					</h2>
					<Link to="/Results">
 						<div className='row answer-row' >
							<button className="my-button" value="" onClick={this.handleOptionChange} >
								less than 4
							</button>

							<button className="my-button" value=">4" onClick={this.handleOptionChange} >
								more than 4
							</button>
						</div>
					</Link>
					<Link to="/DataTransferQuestion">
						<div className='row answer-row' >
							<button className="my-button my-big" onClick={this.props.removeProgress} >
								Back  
							</button>
						</div>
					</Link>
				</div>	
			</div>
			)
		}
	}

export default LanPortQuestion
