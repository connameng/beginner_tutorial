import React, { Component } from 'react';
import './App.css';
import RoomQuestion from './room_question';
import Routers from './routers';
import PriceQuestion from './price_question'
import ParentalQuestion from './parental_control_question'
import FrequencyQuestion from './frequency_band_question'
import DataTransferQuestion from './data_transfer_rate_question'
import LanPortQuestion from './lan_port_question' 
 
class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
    }
    this.handleRoomAnswer = this.handleRoomAnswer.bind(this)
    this.handlePriceAnswer = this.handlePriceAnswer.bind(this)
    this.handleParentalAnswer = this.handleParentalAnswer.bind(this)
    this.handleFrequencyAnswer = this.handleFrequencyAnswer.bind(this)
    this.handleDataTransferAnswer = this.handleDataTransferAnswer.bind(this)
    this.handleLanPortAnswer = this.handleLanPortAnswer.bind(this)
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
  handleParentalAnswer(e) {
  // prevents page from reloading 
  e.preventDefault()
  const items = this.state.allAnswers;
  items[2] = e.target.value;
  this.setState({
  //      someVar: e.target.value
    items,
  })
  }
  handleFrequencyAnswer(e) {
  // prevents page from reloading 
  e.preventDefault()
  const items = this.state.allAnswers;
  items[3] = e.target.value;
  this.setState({
  //      someVar: e.target.value
    items,
  })
  }
  handleDataTransferAnswer(e) {
  // prevents page from reloading 
  e.preventDefault()
  const items = this.state.allAnswers;
  items[4] = e.target.value;
  this.setState({
  //      someVar: e.target.value
    items,
  })
  }
  handleLanPortAnswer(e) {
  // prevents page from reloading 
  e.preventDefault()
  const items = this.state.allAnswers;
  items[5] = e.target.value;
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
            <RoomQuestion handleRoomAnswer={this.handleRoomAnswer} />
            <PriceQuestion handlePriceAnswer={this.handlePriceAnswer} />
            <ParentalQuestion handleParentalAnswer={this.handleParentalAnswer} />
            <FrequencyQuestion handleFrequencyAnswer={this.handleFrequencyAnswer} />
            <DataTransferQuestion handleDataTransferAnswer={this.handleDataTransferAnswer} />
            <LanPortQuestion handleLanPortAnswer={this.handleLanPortAnswer} />
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
