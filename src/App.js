import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Page1 from './pages/page-1.js';
import Page2 from './pages/page-2.js';
import Page3 from './pages/page-3.js';
import Page4 from './pages/page-4.js';
import Page5 from './pages/page-5.js';
import CoverPage from './pages/cover-page.js';
import { slide as Menu } from 'react-burger-menu';


function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  function RenderMenu(props)
  {
      return(
      <Menu>
      <Link to="/1" className="navButton">
        1: first, neural networks
      </Link>
      <Link to="/2" className="navButton">
        2: shining a flashlight on filters
      </Link>
      <Link to="/3" className="navButton">
        3: filters and images
      </Link>
      <Link to="/4" className="navButton">
        4: breaking it down
      </Link>
      <Link to="/5" className="navButton">
        5: what do CNNs look like?
      </Link>
      </Menu>);
    }
  
  return (
    <div className="App">
      <Router>
      <RenderMenu/>
        <ScrollToTop />
        <Route exact path="/"> {/* needs to be exact path otherwise it becomes default */}
          <CoverPage />
        </Route>
        <Route path="/main">
          <CoverPage />
        </Route>
        <Route path="/1">
          <Page1 />
        </Route>
        <Route path="/2">
          <Page2 />
        </Route>
        <Route path="/3">
          <Page3 />
        </Route>
        <Route path="/4">
          <Page4 />
        </Route>
        <Route path="/5">
          <Page5 />
        </Route>
        <Route path="/rest">
          nothing
       </Route>
        
      </Router>
    </div>
  );
}

export default App;

