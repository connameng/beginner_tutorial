import React, { Component } from 'react';
import './App.css';
import Room_question from './room_question';
import Routers from './routers';
 
class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      someVar: ''
    }
    this.handleRoomAnswer = this.handleRoomAnswer.bind(this)
  }

  handleRoomAnswer(e) {
    // prevents page from reloading 
    e.preventDefault()
    this.setState({
      someVar: e.target.value
    })
  }

  render() {
    return (
      <div style={{
        float: 'left',
        padding: '10px',
        width: '45%',
        background: '#f0f0f0'
      }}>
          {this.state.someVar}
          <Room_question handleRoomAnswer={this.handleRoomAnswer}/>
          <Routers userAnswers={this.state.someVar} />
        </div>
    );   
  }
}

export default Questions;
