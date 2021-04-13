import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Movie from "./Movie"
import LoginScreen from './screens/LoginScreen'
import Error from "./Error"
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
function App() {
  const user = null

  return (
    <div className='app'>
       <Router>
      {!user ? (<LoginScreen/>) : 
        (<Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>)
      }
        
      </Router>
    </div>
  );
}

export default App;
