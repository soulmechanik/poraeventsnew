import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero_wrapper'>
      <div className="hero_container">
        <div className="hero">
            <p className='highlight'>✈    The Biggest Event In Lagos!</p>
            <h1>The Pora Lagos Ball.</h1>
            <p className='description'>Pora Inc is pleased to announce the first ever <br />
               Lagos Ball in January 2025.</p>
               <p className='location'>
               Venue - The Harbour Point, VI Lagos
               </p>

               <div className="moredetaails">
                    <p className="reservebutton">Reserve</p>
                    <p className="reservebutton">January 2, 2025</p>
               </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
