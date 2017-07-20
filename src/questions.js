// aggregates all question components and pulls them in on the right hand side of the page. 

import React, { Component } from 'react';
import './App.css';
import RoomQuestion from './room_question';
import Routers from './routers';
import PriceQuestion from './price_question'
import ParentalQuestion from './parental_control_question'
import FrequencyQuestion from './frequency_band_question'
import DataTransferQuestion from './data_transfer_rate_question'
import LanPortQuestion from './lan_port_question' 
import NumDevicesQuestion from './numDevices_question'
import { Button, Collapse } from 'react-bootstrap'
 
class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
    }
    this.handlePriceAnswer = this.handlePriceAnswer.bind(this)
    this.handleRoomAnswer = this.handleRoomAnswer.bind(this)
    this.handleParentalAnswer = this.handleParentalAnswer.bind(this)
    this.handleFrequencyAnswer = this.handleFrequencyAnswer.bind(this)
    this.handleDataTransferAnswer = this.handleDataTransferAnswer.bind(this)
    this.handleLanPortAnswer = this.handleLanPortAnswer.bind(this)
    this.handleNumDevicesAnswer = this.handleNumDevicesAnswer.bind(this)
  }

  handlePriceAnswer(e) {
    // prevents page from reloading 
    e.preventDefault()
    const items = this.state.allAnswers;
    items[0] = e.target.value;
    this.setState({
//      someVar: e.target.value
      items,
    })
  }
  handleRoomAnswer(e) {
    e.preventDefault()
    const items = this.state.allAnswers;
    items[1] = e.target.value;
    this.setState({
      items,
    })
  }
  handleParentalAnswer(e) {
  e.preventDefault()
  const items = this.state.allAnswers;
  items[2] = e.target.value;
  this.setState({
    items,
  })
  }
  handleFrequencyAnswer(e) {
  e.preventDefault()
  const items = this.state.allAnswers;
  items[3] = e.target.value;
  this.setState({
    items,
  })
  }
  handleDataTransferAnswer(e) {
  e.preventDefault()
  const items = this.state.allAnswers;
  items[4] = e.target.value;
  this.setState({
    items,
  })
  }
  handleLanPortAnswer(e) {
  e.preventDefault()
  const items = this.state.allAnswers;
  items[5] = e.target.value;
  this.setState({
    items,
  })
  }
 handleNumDevicesAnswer(e) {
  e.preventDefault()
  const items = this.state.allAnswers;
  items[6] = e.target.value;
  this.setState({
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
            <PriceQuestion handlePriceAnswer={this.handlePriceAnswer} />
            <div>
             <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                Next Question 
              </Button>
              <Collapse in={this.state.open}>
                <div>
                 <RoomQuestion handleRoomAnswer={this.handleRoomAnswer} />
                <div>
                  <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                   Next Question 
                  </Button>
                  <Collapse in={this.state.open}>
                   <div>
                     <ParentalQuestion handleParentalAnswer={this.handleParentalAnswer} />
                    </div>
                  </Collapse>
                </div>
              </div>
            </Collapse>
          </div>
           
            <FrequencyQuestion handleFrequencyAnswer={this.handleFrequencyAnswer} />
            <DataTransferQuestion handleDataTransferAnswer={this.handleDataTransferAnswer} />
            <LanPortQuestion handleLanPortAnswer={this.handleLanPortAnswer} />
            <NumDevicesQuestion handleNumDevicesAnswer={this.handleNumDevicesAnswer} />
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
