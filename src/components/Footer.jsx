import React from 'react'

const Footer = () => {
return (
<div className="footer-container">
    <div className="footer-upper">
<div className="address">
<h5>Dubai, UAE</h5>
<h5>contactravic@gmail.com</h5>
<h5>+91 909898099</h5>
</div>
<div className="quick-links">
    <h4>Quick Links</h4>
<ul className='links-list'>
    <li>Covid 19</li>
<li>Events</li>
<li>Awards and Accreditation</li>
<li>IRSSM</li>
<li>Social Media</li>
</ul>
</div>
<div className="letters">
<h4>Subscribe to Newsletter</h4>
<button className='subscribe-btn'>Your Email Address</button>
<button className='subscribe-btn'>Subscribe Now</button>
</div>
</div>
<hr className='hr'/>
<div className="footer-bottom">
<h6>@ Dr. Ravi Chatterjee, 2023</h6>
<ul className='terms-list'>
    <li>Terms of use</li>
    <li>Cookie Policy</li>
    <li>Privacy</li>
</ul>
</div>

</div>
  )
}

export default Footer