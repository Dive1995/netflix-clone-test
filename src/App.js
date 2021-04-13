import React from 'react';
import './App.css';
import HomeScreen from "./HomeScreen";
import Movie from "./Movie"
import Error from "./Error"
// import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
function App() {

  return (
    <div className='app'>
      <HomeScreen />
    </div>
  );
}

export default App;
