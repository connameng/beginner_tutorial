
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

// questions
	render () {
		return (
			<div className="container">
				<Room_Question />

				
				<div className="row">
					<button>
						<Link to='/results' replace >
							Filtered results
						</Link>
					</button>
					<button>
						<Link to={{ pathname: '/results', state: { answer: this.state.answer } }}>
							Go back
						</Link>
					</button>
				</div>
			</div>
			)
		}
	}

	export default Questions
