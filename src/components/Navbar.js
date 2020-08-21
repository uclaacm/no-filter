import React from 'react';
import './style/Navbar.css';
import logo from '../img/ai.png'

class Navbar extends React.Component {
  
    render() {
      return (
            <div className="topnav">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"/>
              <p id="webtag">Digging Deeper Into CNNs</p>
              <a id="ACM" target="_blank" rel="noopener noreferrer" href="https://uclaacmai.github.io/">
                <img id="logo" src={logo} alt="ACM AI Logo" />
              ACM AI
               </a>
            </div>
      )
    }
  }

export default Navbar;
