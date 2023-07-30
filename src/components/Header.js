import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
        <div className='logo' >
          <h1>Movies Hub</h1>
          
        </div>
        <div className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact US</a></li>
            <li><a href="#">List of Movies</a></li>

          </ul>
        </div>
        <div className="btn">
          <button type="submit"  className='button'>Login </button> 
        </div>


    </div>
  )
}

export default Header