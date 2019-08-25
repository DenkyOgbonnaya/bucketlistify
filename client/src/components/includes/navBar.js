import React, {useState} from 'react';
import {useGlobal} from 'reactn';
import {Button, NavItem, Nav, Navbar, NavLink, NavbarBrand, NavbarToggler} from 'reactstrap';
import {withRouter, NavLink as RRNavlink} from 'react-router-dom';
const NavBar = props => {
  const[isAuthenticated, setIsAuthenticated] = useGlobal('isAuthenticated');

  const gotoHome = e => {
    e.preventDefault();
    props.history.push('/');
  }
  const handleLogout = () => {
    localStorage.removeItem('bearerToken');
    setIsAuthenticated(false);
  }

  return (
    <div>
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand href='/' onClick= {gotoHome}> <img src= '/favicon.ico' alt='logo'/> Bucketlistify</NavbarBrand>
          <Nav className="ml-auto" navbar>
              <NavItem>
              {isAuthenticated ?
              <NavItem>
              <NavLink to='/login' tag={RRNavlink} onClick={ handleLogout} > Logout </NavLink>
            </NavItem>
             :
             <Nav className="ml-auto" navbar>
               <NavItem>
               <NavLink to='/login' tag={RRNavlink} >Login </NavLink>
             </NavItem>
             <NavItem>
               <NavLink to='/signup' tag={RRNavlink} > Signup </NavLink>
             </NavItem>
           </Nav>
            } 
              
            </NavItem> 
            
          </Nav>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);