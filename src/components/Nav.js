import React, { Component } from 'react';

import "../styles/main.scss";

import { FaFacebook, FaTwitter, FaInstagram, FaYelp, FaGithub } from 'react-icons/fa';

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
            <a href="https://www.facebook.com/estelo.abellanosa" target="_blank">
              <li><FaFacebook /></li>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <li><FaInstagram /></li>
            </a>
            <a href="https://twitter.com/EsteloManitoba" target="_blank">
              <li><FaTwitter /></li>
            </a>
            <a href="https://biz.yelp.com/" target="_blank">
              <li><FaYelp /></li>
            </a>
            <a href="https://github.com/estelo2jz/barberrevise" target="_blank">
              <li><FaGithub /></li>
            </a>
          </ul>
          <div>
            <a href="https://booksy.com/en-us/" target="_blank">
              <p>Book Appointment</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
