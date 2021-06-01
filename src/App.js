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
import CoverPage from './pages/cover-page.js';


function App() {
  const path = window.location.pathname;
  var pageno = path.substring(1);
  if (pageno === "") {
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
    if (curPage === 0 || curPage === 1) {
      return (
        <div className="navigation">
          <Link to={rightStr} id="rightB" className="navArrow" onClick={() => setPage(curPage + 1)}>
            next
        </Link>
        </div>
      )
    }
    else if (curPage === 5) {
      return (
        <div className="navigation">
          <Link to={leftStr} id="leftB" className="navArrow" onClick={() => setPage(curPage - 1)}>
            back
        </Link>
        </div>
      )
    }
    else {
      return (
        <div className="navigation">
          <Link to={leftStr} id="leftB2" className="navArrow" onClick={() => setPage(curPage - 1)}>
            back
        </Link>
          <Link to={rightStr} id="rightB2" className="navArrow" onClick={() => setPage(curPage + 1)}>
            next
        </Link>
        </div>
      )
    }

  }

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <div class="index">
          <Link to="/1" className="navButton" onClick={() => setPage(1)}>
            Page 1
          </Link>
          <Link to="/2" className="navButton" onClick={() => setPage(2)}>
            Page 2
          </Link>
          <Link to="/3" className="navButton" onClick={() => setPage(3)}>
            Page 3
          </Link>
          <Link to="/4" className="navButton" onClick={() => setPage(4)}>
            Page 4
          </Link>
          <Link to="/5" className="navButton" onClick={() => setPage(5)}>
            Page 5
          </Link>
        </div>
        <Route exact path="/"> {/* needs to be exact path otherwise it becomes default */}
          <Page1 />
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
        <RenderButtons curPage={parseInt(page)} />
      </Router>
    </div>
  );
}

export default App;

