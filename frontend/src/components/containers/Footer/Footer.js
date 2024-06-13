// src/components/Footer/Footer.js
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section about'>
          <h1 className='footer-logo'>CompanyLogo</h1>
          <p>
            We are a leading company in providing the best quality products to our customers.
            Your satisfaction is our priority.
          </p>
        </div>
        <div className='footer-section links'>
          <h2>Quick Links</h2>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-section contact'>
          <h2>Contact Us</h2>
          <p>Email: info@company.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className='footer-bottom'>
        &copy; 2024 Company Name | All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
