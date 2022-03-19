import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CounterApp from './apps/counterApp/counterApp';
import UsefulWebsite from './apps/usefulwebsite/UsefulWebsite';
function App() {
  return (
  <>
 <Router>
           <div className="App">
            <ul className="App-header">
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/usefulwebsite">UsefulWebsite</Link>
              </li>
              <li>
                <Link to="/counterapp">Counter App</Link>
              </li>
              {/* <li>
                <Link to="/contact">Contact Us</Link>
              </li> */}
            </ul>
            <br/>
            <hr/>
            <br/>
           <Routes>
                 <Route exact path='/usefulwebsite' element={<UsefulWebsite/>}></Route>
                 <Route exact path='/counterapp' element={<CounterApp />}></Route>
                 {/* <Route exact path='/contact' element={< Contact />}></Route> */}
          </Routes>
          </div>
       </Router>
  </>
  );
}

export default App;
