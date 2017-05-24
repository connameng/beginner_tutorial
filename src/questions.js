// 1 component for all my questions 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Questions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: "option1"
		};

		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	handleOptionChange(changeEvent) {
		this.setState({
			answer: changeEvent.target.value
		});
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="radio">
							<label>
							<input type="radio" value="option1" checked={this.state.answer === 'option1'} onChange={this.handleOptionChange}/>
								Option 1
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option2" checked={this.state.answer === 'option2'} onChange={this.handleOptionChange} />
								Option 2
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option3" checked={this.state.answer === 'option3'} onChange={this.handleOptionChange} />
								Option 3
							</label>
						</div>
					</div>
				</div>
				<div className="row">
					<button>
						<Link to='/results' replace >
							Continue
						</Link>
					</button>
					<button>
						<Link to={{ pathname: '/results', state: { answer: this.state.answer } }}>
							props
						</Link>
					</button>
				</div>
			</div>
			)
		}
	}

	export default Questions
