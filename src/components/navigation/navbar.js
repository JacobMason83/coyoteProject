import React, { useState } from 'react'
import LogoImg from '../../style/images/good Music, Good Times.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className='nav-container'>
          <div className="nav-wrapper">
              <div className="logo-wrapper">
                <img src={LogoImg}/>
              </div>
              <div className="links-wrapper">
                  <ul className='nav-links'>
                  <li className="links"><Link className='links-nav' to='/home'>Home</Link></li>
                  <li className="links"><Link className='links-nav' to='/check-user'>Check Users</Link></li>
                  <li className="links"><Link className='links-nav' to='/forms'>Forms</Link></li>                  
                  </ul>
              </div>
          </div>
        </div>
    )
}

export default NavBar