// const {string} = React.PropTypes
import React, { Component } from 'react'

class ShowCard extends Component {

 render () {
  const { model, antenas, frequency } = this.props
    return (
      <div className='show-card'>
          <p>Model:{ model}; antenas:{ antenas}; frequency:{ frequency}</p>
      </div>
    )
  }
}

export default ShowCard
