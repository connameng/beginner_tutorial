// const {string} = React.PropTypes
import React, { Component } from 'react'

class ShowCard extends Component {

 render () {
  const { model, antenas, frequency, html } = this.props
    return (
      <div className='show-card'>
          <p>Model:{ model}; antenas:{ antenas}; frequency:{ frequency}; {html}</p>
      </div>
    )
  }
}

export default ShowCard
