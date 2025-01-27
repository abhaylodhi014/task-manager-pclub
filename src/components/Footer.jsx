

import React from 'react'

const Footer = ({theme}) => {
  return (
    < div  >
      <footer class="footer"  style={{backgroundColor: theme==='dark'?'#2c2b2b':'azure' , color: theme==='dark'?'white':'black' }}>
  <div class="footer-content ">
    <p>© 2025 Task Manager. All rights reserved.</p>
    <p className='fw-bold'>"Success is the sum of small efforts, repeated day in and day out." – Robert Collier</p>
    <ul class="footer-links">
      <li><a href="#privacy-policy">Privacy Policy</a></li>
      <li><a href="#terms-of-service">Terms of Service</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  </div>
</footer>
    </div>
  )
}

export default Footer

