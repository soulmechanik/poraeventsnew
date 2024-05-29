import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer_wrapper'>

        <div className="footer_container">
            <div className="footer">
                <div className="box">
                <h3 className='logo2'>Pora Intro</h3>
                <span>Voted the best Single Networking event in Nigeria 2024.</span>
                </div>

                <div className="box">
                    <h3>Event Locations</h3>
                    <span> Lagos</span>
                    <span> Abuja</span>
                    <span>Toronto </span>
                    <span> Canada</span>
                  
                </div>
                <div className="box">
                    <h3>Partners</h3>
                    <span> ASL Business Solutions</span>
                    <span> Twinkle Digital Solutions </span>
                    <span>Microsoft</span>
                    <span> Azure</span>
                </div>
                <div className="box">
                    <h3>Products</h3>
                    <span> Pora App</span>
                    <span> Pora Intro</span>
                    <span>  </span>
                    <span> </span>
                </div>

               
            </div>
        </div>
      
    </div>
  )
}

export default Footer