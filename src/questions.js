import React, { Component } from 'react';
import './App.css';
import RoomQuestion from './room_question';
import Routers from './routers';
 
class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
    }
    this.handleRoomAnswer = this.handleRoomAnswer.bind(this)
    this.handlePriceAnswer = this.handlePriceAnswer.bind(this)
  }
// make more of these 
  handleRoomAnswer(e) {
    // prevents page from reloading 
    e.preventDefault()
    const items = this.state.allAnswers;
    items[0] = e.target.value;
    this.setState({
//      someVar: e.target.value
      items,
    })
  }
    handlePriceAnswer(e) {
    // prevents page from reloading 
    e.preventDefault()
    const items = this.state.allAnswers;
    items[1] = e.target.value;
    this.setState({
//      someVar: e.target.value
      items,
    })
  }

  render() {
    return (
      <div >
          {this.state.allAnswers}
          <div style={{
        float: 'left',
        padding: '10px',
        width: '45%',
        background: '#f0f0f0'
      }}>
            <RoomQuestion handleRoomAnswer={this.handleRoomAnswer} handlePriceAnswer={this.handlePriceAnswer}/>
          </div>
          <div style={{
        float: 'left',
        padding: '10px',
        width: '45%'
      }}>
          <Routers userAnswers={this.state.allAnswers} />
          </div>
        </div>
    );   
  }
}

export default Questions;
