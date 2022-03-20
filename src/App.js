import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CounterApp from './apps/counterApp/counterApp';
import UsefulWebsite from './apps/usefulwebsite/UsefulWebsite';
import DiceGame from './apps/diceGame/DiceGame';
import SimpleInterestApp from './apps/simpleInterestApp/SimpleInterestApp';
import ToDoApp from './apps/todoapp/ToDoApp';
import MotivationalQuotes from './apps/motivationalQuotes/MotivationalQuotes';
import"./styles.css";
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
              <li>
                <Link to="/dicegame">Dice Game</Link>
              </li>
              <li>
                <Link to="/simpleinterestapp">Simple Interest App</Link>
              </li>
              <li>
                <Link to="/todoapp">TodoApp</Link>
              </li>
              <li>
                <Link to="/motivationalquotes">MotivationalQuotes</Link>
              </li>
            </ul>
            <br/>
            <hr/>
            <br/>
           <Routes>
                 <Route exact path='/usefulwebsite' element={<UsefulWebsite/>}></Route>
                 <Route exact path='/counterapp' element={<CounterApp />}></Route>
                 <Route exact path='/dicegame' element={< DiceGame/>}></Route>
                 <Route exact path='/simpleinterestapp' element={< SimpleInterestApp  />}></Route>
                 <Route exact path='/todoapp' element={< ToDoApp />}></Route>
                 <Route exact path='/motivationalquotes' element={< MotivationalQuotes />}></Route>
          </Routes>
          </div>
       </Router>
  </>
  );
}

export default App;
