import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './ai.png';

class Navbar extends React.Component {
  
  render() {
    return (
        <div className = "navbar">
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"/>
          <a name="top"></a>
          <div className="topnav">
            <a id="webtag" href="#top">Digging Deeper Into CNNs</a>
            <a id="ACM" target="_blank" href="https://uclaacmai.github.io/">
              <img id="logo" src={logo} alt="ACM AI Logo" />
            ACM AI
             </a>
          </div>
        </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
