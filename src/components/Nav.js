import React, { Component } from 'react';

import "../styles/main.scss";

import { FaFacebook, FaTwitter, FaInstagram, FaYelp } from 'react-icons/fa';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-links-container">
          <ul>
            <li>Hours</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="nav-socials-container">
          <ul>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaTwitter /></li>
            <li><FaYelp /></li>
          </ul>
          <div>
            <p>Book Appointment</p>
          </div>
        </div>
      </div>
    )
  }
}
