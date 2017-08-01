import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader, small } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
	      <div className="App-header">
	        <PageHeader>   <img src={logo} className="App-logo" alt="logo" />
	        Best Wifi Router Guide
	        <small> This quick survey will allow you to easily see which wifi router is right for you! Don't overpay.</small></PageHeader>
	      </div>
	     
    );
  }
}

export default Header;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class Header extends Component {
//   render() {
//     return (
//       <div className="App">

//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Best Wifi Router Guide</h2>
//         </div>
//         <p className="App-intro">
//           This quick survey will allow you to easily see which wifi router is right for you! Don't overpay.
//         </p>
//       </div>
//     );
//   }
// }

// export default Header;
