// const {string} = React.PropTypes
import React, { Component } from 'react'
import Iframe from 'react-iframe'
	
class ShowCard extends Component {

 render () {
  const { iframe_url } = this.props
    return (
      <div className='col-md-3'>
          <Iframe url={iframe_url}
		      width="120px"
		      height="240px"
		      display="initial"
		      position="relative"
		      scrolling="no"
		      frameborder="0"
		      styles={{float: "left"}}
	      />
      </div>
    )
  }
}

export default ShowCard
