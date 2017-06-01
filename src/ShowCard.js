// const {string} = React.PropTypes
import React, { Component } from 'react'

class ShowCard extends Component {

 render () {
  const { model, antenas, frequency } = this.props
    return (
      <div className='show-card'>
        <div>
          <p>Model:{ model}; antenas:{ antenas}; frequency:{ frequency}</p>
        </div>
      </div>
    )
  }
}

export default ShowCard

// const {string} = React.PropTypes

// import React, { Component } from 'react'

// class ShowCard extends Component {
//   propTypes: {
//     poster: string.isRequired,
//     title: string.isRequired,
//     year: string.isRequired,
//     description: string.isRequired
//   },

//  render () {
//   const {poster, title, year, description } = this.props
//     return (
//       <div className='show-card'>
//         <img src={`/public/img/posters/${poster}`} />
//         <div>
//           <h3>{title}</h3>
//           <h4>({year})</h4>
//           <p>{description}</p>
//         </div>
//       </div>
//     )
//   }
// }

// export default ShowCard