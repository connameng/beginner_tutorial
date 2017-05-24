// pulling in JSON file

import ShowCard from './ShowCard'
import preload from '../public/data.json'

import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <div>
          {preload.shows.map((show) => {
            return (
             <ShowCard title={show.title} poster={show.poster} description={show.description} year={show.year} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Search
