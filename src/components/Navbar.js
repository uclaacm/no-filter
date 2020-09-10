import React from 'react';
import './style/Navbar.css';
import logo from '../img/ai.png'

class Navbar extends React.Component {
  
    render() {
      return (
            <div className="topnav">
              <a id="webtag" href ="#top">Digging Deeper Into CNNs</a>
              <a id="ACM" target="_blank" rel="noopener noreferrer" href="https://uclaacmai.github.io/">
                <img id="logo" src={logo} alt="ACM AI Logo" />
              ACM AI
               </a>
            </div>
      )
    }
  }

export default Navbar;
