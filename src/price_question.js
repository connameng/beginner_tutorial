// filters out routers that are not in range 
// To Do: 

import React, { Component } from 'react'
// import {ButtonGroup, Button, FormGroup, Radio} from 'react-bootstrap'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Speed_question from './speed_question'

// const BasicExample = () => (
//   <Router>
//     <div>
//     	<button><Link to="/Speed_question">next question</Link></button>
//       <hr/>
//         <Route path="/Speed_question" component={Speed_question}/>
//     </div>
//   </Router>
// )

class PriceQuestion extends Component {
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
		this.props.handlePriceAnswer(e);
	}

// Question and answer options as buttons 
	render () {
		console.log("Price_question: ", this.props)
		return (
	 
	  // <ButtonGroup vertical>
			// 			    <Button>$100 or less</Button>
			// 			    <Button>$200 or less</Button>
			// 			    <Button>Any Price - Just get me the Best</Button>
			// 			    <Button>Clear Answer</Button>
			// 			    </ButtonGroup>
			// 	<FormGroup>
   //    <Radio name="radioGroup" inline>
   //      1
   //    </Radio>
   //    {' '}
   //    <Radio name="radioGroup" inline>
   //      2
   //    </Radio>
   //    {' '}
   //    <Radio name="radioGroup" inline>
   //      3
   //    </Radio>
   //  </FormGroup>
			
<div className="container">
				<div className="row">
					<div className="col-sm-12">How much would you like to spend? [Price range question] 
 						<div className="radio">
 									<label>
							<input type="radio" value="<100" checked={this.state.answer === '<100'} onChange={this.handleOptionChange}/>
								$100 or less	
							</label>
						</div>
						<div className="radio">
 									<label>
							<input type="radio" value="<150" checked={this.state.answer === '<150'} onChange={this.handleOptionChange}/>
								$150 or less	
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="<200" checked={this.state.answer === '<200'} onChange={this.handleOptionChange} />
								$200 or less
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="anyprice" checked={this.state.answer === "anyprice"} onChange={this.handleOptionChange} />
								Any price - just get me the best! 
							</label>
						</div>
						<div className="radio">
							<label>
							<input type="radio" value="clearprice" checked={this.state.answer === "clearprice"} onChange={this.handleOptionChange} />
								clear field  
							</label>
						</div>
					</div>
				</div>	
			</div>
			)
		}
	}

export default PriceQuestion
