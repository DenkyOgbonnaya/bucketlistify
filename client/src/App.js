import React, {useEffect} from 'react';
import './App.css';
import NavBar from './components/includes/navBar';
import Routes from './components/routes';
import jwt from 'jsonwebtoken';
import {useGlobal} from 'reactn';

const App = () => {
  const[currentUser, setCurrentUser] = useGlobal('currentUser');
  const[isAuthenticated, setIsAuthenticated] = useGlobal('isAuthenticated');

  useEffect( () => {
    const bearerToken = localStorage.bearerToken;
    if(bearerToken){
      const{currentUser} = jwt.decode(bearerToken);
      
      if(currentUser){
        setIsAuthenticated(true);
        setCurrentUser(currentUser);
      }
    }else{
      setIsAuthenticated(false);
      setCurrentUser({});
    }
  }, [])
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes />
    </div>
  );
}

export default App;
