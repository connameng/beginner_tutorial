// Filters out routers that are overly powerful or that are not powerful enough. 
// To do: - add section about how to find out which plan they are on. 

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
 						<Link to="/LanPortQuestion">
 						<div className="radio">

							<button  value="1" onClick={this.handleOptionChange}>
								Less than 100 Mbps
							</button>
						</div>
						<div className="radio">

							<button value="2"  onClick={this.handleOptionChange} >
								Greater than 100 Mbps
							</button>
						</div>
						</Link>
						<Link to="/FrequencyQuestion">
						<div className="radio">

							<button  value=""  onClick={this.handleOptionChange} >
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

export default DataTransferQuestion
