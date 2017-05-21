
import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
// import App from './App'
import Results from './resultspage'
import './index.css';

const App = React.createClass({
  render () {
    return (
        <HashRouter>
          <div> words 
            <Match pattern='/Results' component={Results} />
          </div>
        </HashRouter>
    )
  }
})

render(<App />, document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
