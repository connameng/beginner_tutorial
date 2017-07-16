import React, { Component } from 'react'

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
 						<div className="radio">
							<label>
							<input type="radio" value=">4" checked={this.state.answer === '>4'} onChange={this.handleOptionChange}/>
								less than 4
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="<4" checked={this.state.answer === '<4'} onChange={this.handleOptionChange} />
								more than 4
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

export default LanPortQuestion
