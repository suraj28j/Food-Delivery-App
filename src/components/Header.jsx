import React from 'react'
import logo from '../Assets/logo/logo.png'
import { Link } from 'react-router-dom'
import '../styles/HeaderStyle.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <img src={logo} alt='logo' className="w-25"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link " >HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" >ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" >OUR MENU</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-disabled="true">SHOP</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" >BLOG</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" >CONTACT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" ><i className="bi bi-bag"></i></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header