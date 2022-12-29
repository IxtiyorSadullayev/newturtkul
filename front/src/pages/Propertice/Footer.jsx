import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import './Footer.css'
function Footer() {
  return (
    <div>
      <div className="Footer">
        <footer>


          <div className="one_footer footer_children">
            <img src={logo} alt="" />
            <h4>Contact Us</h4>
            <a href="tel: +123400123">Call: 123400123</a>
            <p>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
            <a className='email' href="gmail: example@mail.com">Email: example@mail.com</a>
            <div className="icons">
              <i class="fab fa-facebook"></i>
              <i class="fas fa-basketball"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fab fa-instagram"></i>
              <i class="fa-brands fa-behance"></i>
            </div>
          </div>

          <div className="Features footer_children">
            <h4>Features</h4>
            <Link to="#">Home</Link>
            <Link to=''>Become a Host</Link>
            <Link to=''>Pricing</Link>
            <Link to=''>Blog</Link>
            <Link to=''>Contact</Link>
          </div>

          <div className="Company footer_children">
            <h4>Company</h4>
            <Link to="#">About Us</Link>
            <Link to="#">Press</Link>
            <Link to="#">Contact</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Blog</Link>
          </div>

          <div className="TeamAndPolicies footer_children">
            <h4>Team and policies</h4>
            <Link to=''>Terms of servies</Link>
            <Link to=''>Terms of servies</Link>
            <Link to=''>Security</Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer