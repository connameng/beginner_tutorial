 
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Price_question from './price_question'

const BasicExample = () => (
  <Router>
    <div>
    	<button><Link to="/Price_question">next question</Link></button>
      <hr/>
        <Route path="/Price_question" component={Price_question}/>
    </div>
  </Router>
)

class Room_question extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: "5"
		};
	// binding function handle option change to instance it's being called on. Have to do.
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
							<input type="radio" value="1" checked={this.state.answer =='1'} onChange={this.handleOptionChange}/>
								1 bedroom
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="2" checked={this.state.answer == '2'} onChange={this.handleOptionChange} />
								2+ bedrooms 
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="3" checked={this.state.answer == '3'} onChange={this.handleOptionChange} />
								4+ bedrooms 
							</label>
						</div>
					</div>
				</div>
				<div>
			    	{this.state.someVar}
		        	<p className="App-intro"></p>
		        	<BasicExample/>
		      </div>
			</div>
			)
		}
	}

export default Room_question
