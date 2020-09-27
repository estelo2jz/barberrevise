import React, { Component } from 'react';

import Nav from "./Nav";
import Background from "./Background";
import About from "./About";
import Visit from "./Visit";
import Service from "./Service";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Nav />
        <Background />
        <About />
        <Visit />
        <Service />
      </div>
    )
  }
}
