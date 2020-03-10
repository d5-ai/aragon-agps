import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

export default function Header() {
  return (
    <Navbar className="Header">
      <div className="footer-d5">
        <img alt="D5 Logo" className="d5-logo" src="/d5-logo.png" />
        <span className="by-d5">
          Made by <a
              href="https://d5.ai/?ref=aragon"
              target="_blank"
              rel="noopener noreferrer"
              >D5</a>.
        </span>
      </div>
    </Navbar>
  )
}
