import React from 'react';

import './Aboutevent.scss'

const About = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348094793447?text=Hello%20MyFyP%2C%20I%20want%20to%20inquire%20about%20Your%20final%20Year%20writing%20Service', '_blank');
  };

  return (
    <div className="wrapper">

      


    <div className='hiw_wrapper'>
      <div className="hiw_container">
        <div className="hiw">
          <div className="righttext">
            <span>Event Details </span>
          

<h3>Date: January 2, 2025</h3>

<h3>Location: The Harbour Point, VI Lagos</h3>

<h3> Time: 5pm prompt</h3>

<h3>reg fee: $120</h3>


            <p>The Lagos Ball promises to be fun packed with a plethora of activities designed to provide participants with engaging and memorable interactions.</p>

            <div className="botton4">
            
              <button onClick={handleWhatsAppClick}>
                Reserve Your Seat
              </button>
            </div>
          </div>

          <div className="lefttext">
            <div className="box">
              <span className="number">1</span>
              <div className="texts">
                <h3>We are Exclusive</h3>
                <p>The Lagos Ball is an exclusive event for singles 25 to 45 years old who are ready to  commit to a life long relationship. Attendees will be screened and verified</p>
              </div>
            </div>
            <div className="box">
              <span className="number">2</span>
              <div className="texts">
                <h3>We are Engaging</h3>
                <p>The Lagos Ball promises to be fun packed with a plethora of activities designed to provide participants with engaging and memorable interactions.</p>
              </div>
            </div>
        
        
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;