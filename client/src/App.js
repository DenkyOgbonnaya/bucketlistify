import React from 'react';
import './App.css';
import NavBar from './components/includes/navBar';
import Routes from './components/routes';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes />
    </div>
  );
}

export default App;
