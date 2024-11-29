import React from 'react'
import logo from '../Assets/logo/logo.png'
import { Link } from 'react-router-dom'
import '../styles/HeaderStyle.css'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <img src={logo} alt='logo' className='img-fluid' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link " >HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" >ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu" >OUR MENU</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">SHOP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">BLOG</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" >
                  <div className='cart'>
                    <i className="bi bi-bag"></i>
                    <em className="roundpoint">2</em>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
