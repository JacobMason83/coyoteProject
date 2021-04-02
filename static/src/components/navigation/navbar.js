import React, { useState } from 'react'
import LogoImg from '../../style/images/goodtimes.png';
const NavBar = () => {
    return (
        <div className='nav-container'>
          <div className="nav-wrapper">
              <div className="logo-wrapper">
                <img src={LogoImg}/>
              </div>
              <div className="links-wrapper">
                  <ul className='nav-links'>
                  <li className="links"><a className='links-nav' href='#'>Home</a></li>
                  <li className="links"><a className='links-nav' href='#about-header'>About</a></li>
                  <li className="links"><a className='links-nav' href='#upcoming-header'>Upcoming Events</a></li>                  
                  </ul>
              </div>
          </div>
        </div>
    )
}

export default NavBar