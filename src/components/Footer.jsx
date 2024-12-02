import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/FooterStyle.css"

const Footer = () => {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false)
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const listenToScroll = () => {
    let hightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > hightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
  })

  return (
    <>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-lg-3 mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Location</h5>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Order Now</h5>
                <p>Quaerat neque purus ipsum</p>
                <Link to="" className='calling nav-link'>999-888-7777</Link>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Follow Us</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to="/" className='nav-link'><i className="bi bi-facebook"></i></Link>
                  </li>
                  <li>
                    <Link to="/" className='nav-link'><i className="bi bi-twitter"></i></Link>
                  </li>
                  <li>
                    <Link to="/" className='nav-link'><i className="bi bi-instagram"></i></Link>
                  </li>
                  <li>
                    <Link to="/" className='nav-link'><i className="bi bi-youtube"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row copy_right'>
            <div>
              <ul className='list-unstyled text-center mb-0'>
                <li>
                  <Link to="/" className='nav-link'>© 2023 <span>CODE4EDUCATION</span>. All Rights Reserved</Link>
                </li>
                <li>
                  <Link to="/" className='nav-link'>About Us</Link>
                </li>
                <li>
                  <Link to="/" className='nav-link'>Terms Of Use</Link>
                </li>
                <li>
                  <Link to="/" className='nav-link'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {isVisible && (<div className='scroll_top' onClick={scrollTop}>
        <i class="bi bi-caret-up-square-fill"></i>
      </div>)}

    </>
  )
}

export default Footer
