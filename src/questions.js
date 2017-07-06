import React, { Component } from 'react';
import './App.css';
import Room_question from './room_question';
import Routers from './routers';
 
class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      someVar: '',
      //allAnswers: [],
    }
    this.handleRoomAnswer = this.handleRoomAnswer.bind(this)
  }
// make more of these 
  handleRoomAnswer(e) {
    // prevents page from reloading 
    e.preventDefault()
    this.setState({
      someVar: e.target.value
      //allAnswers[0] : e.target.value
    })
  }

  render() {
    return (
      <div >
          {this.state.someVar}
          <div style={{
        float: 'left',
        padding: '10px',
        width: '45%',
        background: '#f0f0f0'
      }}>
            <Room_question handleRoomAnswer={this.handleRoomAnswer}/>
          </div>
          <div style={{
        float: 'left',
        padding: '10px',
        width: '45%'
      }}>
          <Routers userAnswers={this.state.someVar} />
          </div>
          
        </div>
    );   
  }
}

export default Questions;
