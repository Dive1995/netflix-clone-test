import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Movie from "./Movie"
import LoginScreen from './screens/LoginScreen'
import Error from "./Error"
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout,selectUser} from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen'

function App() {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user.user)
  const user = useSelector(selectUser)
  // const user = null;

  useEffect(() => {
    const unsubscribeUser = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //login
        // console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }else{
        //logout
        // console.log('no user');
        dispatch(logout())
      }
    })
    return unsubscribeUser
  },[dispatch])

  return (
    <div className='app'>
       <Router>
      {!user ? (<LoginScreen/>) : 
        (<Switch>
          <Route exact path="/profile">
            <ProfileScreen />
          </Route>
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
