import React from 'react'
import '../Header/Header.scss'


const Header = () => {
  return (
    <div className='Header-wrapper'>
    <div className="Header-container">
        <div className="Header">
            <nav>
            <div className="logo"><span className='logo'>Pora Events</span> </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Event</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="" className='h-signin'>Gallery</a></li>
                <li><a href="" className='botton'>Reserve</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            </nav>
        </div>
    </div>
    </div>
  )
}

export default Header