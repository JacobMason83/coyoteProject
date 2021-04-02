import React, { useState } from 'react';
const MyFooter = (props) => {

   return(
 <footer className='my-footer'>
    <div className="footer-wrapper">
       <div className="top">
       <h1>Coyote Grove Venue</h1>
         <h1 className="email-wrapper"><span>Email: freeze928@gmail.com</span></h1>
       </div>
       <div className="bottom">
            <h1><span>Mason</span> Web Services</h1>
            <h2>Copyright 2021</h2>
       </div>
    </div>
 </footer>
   )
}

export default MyFooter;