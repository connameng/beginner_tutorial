 
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Speed_question from './speed_question'

const BasicExample = () => (
  <Router>
    <div>
    	<button><Link to="/Speed_question">next question</Link></button>
      <hr/>
        <Route path="/Speed_question" component={Speed_question}/>
    </div>
  </Router>
)

class Bandwidth_question extends Component {
	// everytime render component takes prop from parent 
	constructor(props) {
		super(props);
		this.state = {
			answer: "y"
		};

		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	// on change event 
	handleOptionChange(e) {
		this.setState({
			answer: e.target.value
		});
		this.props.handleAnswers(e);
	}

// questions
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12"> Do you live in an apartment complex/ city where there are many current wifi networks? [Frequency band question]
 						<div className="radio">
							<label>
							<input type="radio" value="y" checked={this.state.answer === 'y'} onChange={this.handleOptionChange}/>
								Yes
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="n" checked={this.state.answer === 'n'} onChange={this.handleOptionChange} />
								No
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

	export default Bandwidth_question

