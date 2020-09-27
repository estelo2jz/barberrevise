// import React, { useState, useEffect, useRef } from 'react';
// import './index.css';
// // import './styles/main.scss'

// // import Home from './components/Home';
// import About from './components/About';
// import Visit from './components/Visit';
// import Hours from './components/Hours';
// import Service from './components/Service';
// import Blog from './components/Blog';
// import Footer from './components/Footer';

// import { FaFacebookSquare, FaInstagramSquare, FaYelp, FaGooglePlusSquare } from 'react-icons/fa';

// function App() {
//   return (
//     <div>
//       <Navbar>
//         <NavItem icon="HOURS" />
//         <NavItem icon="SERVICES" />
//         <NavItem icon="BLOG" />
//         <NavItem icon="GALLERY" />
//         <div className="link-container">
//           <div className="links">
//             <a href="https://www.facebook.com/"><FaFacebookSquare /></a>
//           </div>
//           <div className="links">
//             <a href="https://www.instagram.com/"><FaInstagramSquare /></a>
//           </div>
//           <div className="links">
//             <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjbuuLM4O7qAhUWac0KHQvmAi8QPAgH"><FaGooglePlusSquare /></a>
//           </div>
//           <div className="links">
//             <a href="https://www.yelp.com/"><FaYelp /></a>
//           </div>
//         </div>
//         <BookAppointment book="BOOK APPOINTMENT" />
//       </Navbar>

      
//       <About />
//       <Visit />
//       <Hours />
//       <Service />
//       <Blog />
//       <Footer />
//     </div>

//   );
// }

// function Navbar(props) {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-nav">{props.children}</ul>
//     </nav>
//   );
// }

// function BookAppointment(props) {
//   return (
//     <a className="test" href="https://booksy.com/en-us/"><h2 className="heading">{props.book}</h2></a>
//   );
// }

// function NavItem(props) {
//   return (
//     <li className="nav-item">
//       <h2>
//         <a href="#" className="icon-button">
//           {props.icon}
//         </a>
//       </h2>
//       {props.children}
//     </li>
//   );
// }

// export default App;

import React, { Component } from 'react';

import Home from "./components/Home";

import "./styles/main.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

