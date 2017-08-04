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
			<div className="container">
				<div className="row">
					<div className="col-sm-12">Number of lan ports? [Lan Port question]
 						<Link to="/LanPortQuestion">
 						<div className="radio">

							<button value="" onClick={this.handleOptionChange} >
								less than 4
							</button>
						</div>
						<div className="radio">

							<button value=">4" onClick={this.handleOptionChange} >
								more than 4
							</button>
						</div>
						</Link>
						<Link to="/DataTransferQuestion">
						<div className="radio">

							<button value="" onClick={this.handleOptionChange} >
								Back  
							</button>
						</div>
						</Link>
					</div>
				</div>	
			</div>
			)
		}
	}

export default LanPortQuestion
