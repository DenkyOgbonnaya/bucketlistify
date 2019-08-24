import React, {useState} from 'react';
import {Button, NavItem, Nav, Navbar, NavLink, NavbarBrand, NavbarToggler} from 'reactstrap';
import {withRouter, NavLink as RRNavlink} from 'react-router-dom';
const NavBar = props => {
  const[isAuthenticated] = useState(false);

  const handleLogout = () => {
  }
  const gotoHome = e => {
    e.preventDefault();
    props.history.push('/');
  }

  return (
    <div>
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand href='/' onClick= {gotoHome}> <img src= '/favicon.ico' alt='logo'/> Bucketlistify</NavbarBrand>
          <Nav className="ml-auto" navbar>
              <NavItem>
              {isAuthenticated ?
              <NavItem>
              <NavLink to='/signup' tag={RRNavlink} > Logout </NavLink>
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