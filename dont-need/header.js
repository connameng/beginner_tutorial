import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader, small } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
        <section id="header">
	        <div class="inner">
	          <span class="icon major fa-wifi"></span>
	          <h1> Find which Wifi Router is right for <strong> you </strong> <br /> 
	          within minutes, not hours of research.</h1>
	          <p>Let our experts help!<br />
	          Answer simple questions to see your personalized and unbiased reccomendation <br />
	          from top wireless router brands.</p>
	          <ul class="actions">
	            <li><a href="#one" class="button scrolly">Discover</a></li>
	          </ul>
	        </div>
      </section>
	     
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
