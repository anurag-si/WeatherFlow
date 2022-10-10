import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <ul id="left-nav">
            <li>
                WeatherFlow
            </li>
        </ul>
        {/* <ul id="right-nav">
            <li className='img1'> 
                <img src='../../packages/weather.jpeg' />
            </li>


            <li>
                Logo
            </li>
        </ul> */}
    </div>
  )
}

export default Header