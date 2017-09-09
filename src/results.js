
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Results extends Component {
  render() {
    return (
			<div className="my-container">
				<div> 
					<h3 className='question-text'> Congrats! <br/>Here are your reccomended routers 
					</h3>
					<h2 className="subquestion-text"> 
						<ol>
							<li>If you still have a handful to choose from, consider the router warranty period and support offerings. Link to Customer Support table to show differences. </li>
							<li>If you do not see any routers, you will need a higher price point for the features you need.  					
								</li> 
						</ol>
					</h2>
 
						<Link to="/">
							<div className='answer-row' >
								<button className="my-button my-big" onClick={this.props.removeProgress} >
									Back  
								</button>
							</div>
						</Link>
					</div>
			</div>
    );
  }
}

export default Results
