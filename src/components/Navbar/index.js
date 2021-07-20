import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';

const Navbar = () => {
  return (
      <Nav>
        <NavLink to='/'>
          <h1>Assigment-1</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
  );
};

export default Navbar;
