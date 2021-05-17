import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Page1 from './pages/page-1.js';
import Page2 from './pages/page-2.js';
import Page3 from './pages/page-3.js';
import Page4 from './pages/page-4.js';
import Page5 from './pages/page-5.js';


function App() {
  const path = window.location.pathname;
  var pageno = path.substring(1);
  if (pageno == "") {
    pageno = "0";
  }
  const [page, setPage] = useState(1);

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  function RenderButtons(props) {
    const curPage = props.curPage;
    var rightStr = "/" + (parseInt(curPage, 10) + 1);
    var leftStr = "/" + (parseInt(curPage, 10) - 1);
    if (curPage == 0 || curPage == 1) {
      return (
        <div className="navigation">
          <Link to={rightStr} className="navArrow" onClick={() => setPage(curPage + 1)}>
            right
        </Link>
        </div>
      )
    }
    else if (curPage == 5) {
      return (
        <div className="navigation">
          <Link to={leftStr} className="navArrow" onClick={() => setPage(curPage - 1)}>
            left
        </Link>
        </div>
      )
    }
    else {
      return (
        <div className="navigation">
          <Link to={leftStr} className="navArrow" onClick={() => setPage(curPage - 1)}>
            left
        </Link>
          <Link to={rightStr} className="navArrow" onClick={() => setPage(curPage + 1)}>
            right
        </Link>
        </div>
      )
    }

  }

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Route exact path="/"> {/* needs to be exact path otherwise it becomes default */}
          <Page1 />
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
        <RenderButtons curPage={parseInt(page)} />
      </Router>
    </div>
  );
}

export default App;

