 
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import numDevices_question from './numdevices_question'

const BasicExample = () => (
  <Router>
    <div>
    	<button><Link to="/numDevices_question">next question</Link></button>
      <hr/>
        <Route path="/numDevices_question" component={numDevices_question}/>
    </div>
  </Router>
)

class Speed_question extends Component {
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
					<div className="col-sm-12"> What Internet Service Provider (ISP) do you have and how fast is the theoretical DL/UL speed? [Speed/ Data transfer rate question]
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

	export default Speed_question

