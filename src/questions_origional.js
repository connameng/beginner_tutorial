// 1 component for all my questions 
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
				<div className="row">
					<div className="col-sm-12"> How many rooms is your home/ apartment? [Range/ antenna question]
 
						<div className="radio">
							<label>
							<input type="radio" value="q1" checked={this.state.answer === 'q1'} onChange={this.handleOptionChange}/>
								1 bedroom
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="q1" checked={this.state.answer === 'q1'} onChange={this.handleOptionChange} />
								2+ bedrooms 
							</label>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12"> Do you live in an apartment complex/ city where there are many current wifi networks? [Frequency band question]

 
						<div className="radio">
							<label>
							<input type="radio" value="q2" checked={this.state.answer === 'q2'} onChange={this.handleOptionChange}/>
								Yes
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="q2" checked={this.state.answer === 'q2'} onChange={this.handleOptionChange} />
								No
							</label>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12"> What Internet Service Provider (ISP) do you have and how fast is the theoretical DL/UL speed? [Data transfer rate question]
						<div className="radio">
							<label>
							<input type="radio" value="option1" checked={this.state.answer === 'option1'} onChange={this.handleOptionChange}/>
								Greater than 100mbps
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option2" checked={this.state.answer === 'option2'} onChange={this.handleOptionChange} />
								Less than 100mbps
							</label>
						</div>
					</div>
				</div>


				<div className="row">
					<div className="col-sm-12">How many devices do you have on the network? (laptops/gaming systems/cell phones etc.) [Protocol question]
						<div className="radio">
							<label>
							<input type="radio" value="option1" checked={this.state.answer === 'option1'} onChange={this.handleOptionChange}/>
								Greater than 5 devices
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option2" checked={this.state.answer === 'option2'} onChange={this.handleOptionChange} />
								Less than 5 devices
							</label>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">Are you a parent and want to be able to filter/restrict activity on the internet (set up time windows or restricted sites) [Parental controls]
						<div className="radio">
							<label>
							<input type="radio" value="option1" checked={this.state.answer === 'option1'} onChange={this.handleOptionChange}/>
								Yes
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option2" checked={this.state.answer === 'option2'} onChange={this.handleOptionChange} />
								No
							</label>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">How many wire connections to the router do you need? (think LAN ethernet connection for gaming system or home computer) [Ethernet port question]

						<div className="radio">
							<label>
							<input type="radio" value="option1" checked={this.state.answer === 'option1'} onChange={this.handleOptionChange}/>
								Greater than 4
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option2" checked={this.state.answer === 'option2'} onChange={this.handleOptionChange} />
								Less than 4
							</label>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">Avergae Customer Review 
						<div className="radio">
							<label>
							<input type="radio" value="option1" checked={this.state.answer === 'option1'} onChange={this.handleOptionChange}/>
								5 stars
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option2" checked={this.state.answer === 'option2'} onChange={this.handleOptionChange} />
								4+ stars 
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option2" checked={this.state.answer === 'option2'} onChange={this.handleOptionChange} />
								3+ stars 
							</label>
						</div>
					</div>
				</div>

					<div className="row">
					<div className="col-sm-12">Price range  

						<div className="radio">
							<label>
							<input type="radio" value="option1" checked={this.state.answer === 'option1'} onChange={this.handleOptionChange}/>
								Under $100
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option2" checked={this.state.answer === 'option2'} onChange={this.handleOptionChange} />
								$100-150 
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="option2" checked={this.state.answer === 'option2'} onChange={this.handleOptionChange} />
								$150 or more  
							</label>
						</div>
					</div>
				</div>

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
