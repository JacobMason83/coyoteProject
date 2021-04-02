import React, { useState, useEffect , Fragment } from 'react'
import Content from '../content/content';
import Events from '../content/events'
import AOS from 'aos';


import 'aos/dist/aos.css';



const Home = props => {


 useEffect (() => {
   AOS.init({ duration: 3000})
 }, [])
  return (
    <div className='home-container'>
      <div className='home-wrapper'>
        <div className='header-section'>
          <h1 className='header-sign'>
            <span>C</span>
            <span>o</span>
            <span>y</span>
            <span>o</span>
            <span>t</span>
            <span>e</span>
            <span> </span>
            <span>G</span>
            <span>r</span>
            <span>o</span>
            <span>v</span>
            <span>e</span>
          </h1>
        </div>
        <section className='description'>
         <p>Coyote Grove is a Music Venue in Bellvue Ohio, It hosts events throughout the summer, and fall every year.It hosts local bands, and its a great place to spend a weekend away from the woes of regular life. So come out have fun and listen to some good music.</p>
        </section>
        <section className="body-section" >
        <div className='heros-section' data-aos='flip-down'>
        <div className="hero-title">
        <h1 id="about-header" className='title'>About Coyote Grove, Great Music Great Atmosphere</h1>

        </div>
          <section className='about-section'>
            <Content />
          </section>
        </div>
        </section>
      
        <section className="third-section" data-aos='flip-up'>
        <div className='heros-upcoming'>
        <div className="upcoming-events-header">
        <h1 id="upcoming-header" className='title'>Upcoming Events 2021 </h1>

        </div>
          <section className='upcoming-events-section'>
            <Events />
          </section>
        </div>
        </section>
      </div>
    </div>
  )
}

export default Home
