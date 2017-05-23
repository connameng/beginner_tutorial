// 1 component for all my questions 
import React from 'react'
import ReactDOM from 'react-dom'
import * as Survey from 'survey-react/survey.react.min'
// import { Survey } from 'survey-react/survey.react'
Survey.Survey.cssType = "bootstrap"

var surveyJSON = {pages:[{elements:[{type:"checkbox",choices:[{value:"1bdrm",text:"0-1 Bedroom"},{value:"2bdrm",text:"2+ Bedrooms"}],isRequired:true,name:"How many bedrooms do you have? "}],name:"page1"},{name:"page2"}]}

const Questions = React.createClass({
  render () {
    return (
      <p>Question 1
		<div id="surveyContainer"></div>
	</p>
    )
  }
})

function sendDataToServer(survey) {
    survey.sendResult('5b1e4994-6e92-4d2c-86e5-2f2ebb6af036');
}

ReactDOM.render(
    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));


export default Questions
