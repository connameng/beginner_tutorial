// aggregates all question components and pulls them in on the right hand side of the page. 

import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  history
} from 'react-router-dom'
import './App.css';
import RoomQuestion from './room_question';
import Routers from './routers';
import PriceQuestion from './price_question'
import ParentalQuestion from './parental_control_question'
import FrequencyQuestion from './frequency_band_question'
import DataTransferQuestion from './data_transfer_rate_question'
import LanPortQuestion from './lan_port_question' 
import NumDevicesQuestion from './numDevices_question'
import Results from './results'
import {ProgressBar} from 'react-bootstrap'
 
class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
      progressBar: 1
    }
    this.handlePriceAnswer = this.handlePriceAnswer.bind(this)
    this.handleRoomAnswer = this.handleRoomAnswer.bind(this)
    this.handleParentalAnswer = this.handleParentalAnswer.bind(this)
    this.handleFrequencyAnswer = this.handleFrequencyAnswer.bind(this)
    this.handleDataTransferAnswer = this.handleDataTransferAnswer.bind(this)
    this.handleLanPortAnswer = this.handleLanPortAnswer.bind(this)
    this.handleNumDevicesAnswer = this.handleNumDevicesAnswer.bind(this)
    this.addProgress = this.addProgress.bind(this)
  }

  addProgress(){
    let newProgressBar = this.state.progressBar
    newProgressBar += 100/7
    this.setState({progressBar:newProgressBar})
  }

  handlePriceAnswer(val) {
    // prevents page from reloading 
    // e.preventDefault()
    const items = this.state.allAnswers;
    items[0] = val.target.value;
    this.setState({
      items,
    })
    this.addProgress()

  }
  handleRoomAnswer(val) {
    // e.preventDefault()
    const items = this.state.allAnswers;
    items[1] = val.target.value;
    this.setState({
      items,
    })
    this.addProgress()
  }
  handleParentalAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[2] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }
  handleFrequencyAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[3] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }
  handleDataTransferAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[4] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }
  handleLanPortAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[5] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }
 handleNumDevicesAnswer(val) {
  // e.preventDefault()
  const items = this.state.allAnswers;
  items[6] = val.target.value;
  this.setState({
    items,
  })
  this.addProgress()
  }

  render() {
    return (
      <div >
          {this.state.allAnswers}
          <div style={{
            float: 'left',
            padding: '5px',
            width: '45%',
          }}>
            <BrowserRouter>
              <div>
                <Route exact path="/" render={()=><PriceQuestion context={history} handlePriceAnswer={this.handlePriceAnswer}/>}/>
                <Route exact path="/RoomQuestion" render={()=><RoomQuestion handleRoomAnswer={this.handleRoomAnswer}/>}/>
                <Route exact path="/NumDevicesQuestion" render={()=><NumDevicesQuestion handleNumDevicesAnswer={this.handleNumDevicesAnswer}/>}/>
                <Route exact path="/ParentalQuestion" render={()=><ParentalQuestion handleParentalAnswer={this.handleParentalAnswer}/>}/>
                <Route exact path="/FrequencyQuestion" render={()=><FrequencyQuestion handleFrequencyAnswer={this.handleFrequencyAnswer}/>}/>
                <Route exact path="/DataTransferQuestion" render={()=><DataTransferQuestion handleDataTransferAnswer={this.handleDataTransferAnswer}/>}/>
                <Route exact path="/LanPortQuestion" render={()=><LanPortQuestion handleLanPortAnswer={this.handleLanPortAnswer}/>}/>
                <Route exact path="/Results" render={()=><Results handleResultsPage={this.handleResultsPage}/>}/>
              </div>
            </BrowserRouter>
              <ProgressBar now={this.state.progressBar} />
          </div>
  
          <div style={{
            float: 'left',
            padding: '5px',
            width: '45%'
          }}>
          <Routers userAnswers={this.state.allAnswers} />
         </div>
        </div>
    );   
  }
}

export default Questions;
