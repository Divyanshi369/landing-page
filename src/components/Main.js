import React, {useState} from 'react'
import Movies from './cardApi'
import Card from './card'
// import { useState } from 'react'
const Main = () => {
    const [movieData, setMovieData] = useState(Movies)
  return (
    <div className='Main'>
      <div className="col">
        <h2>Movies ready to watch</h2>
        <p>Here is the top movies for you . If you want to watch more movies , click the button below.</p>
        <button type='button' className='button'> More!</button>
      </div>
      <div className="col">
        <Card movieData={movieData}/>
      </div>
    
    </div>
  )

}


export default Main