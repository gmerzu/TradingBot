import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import './styles.css';

const Header = () => (
  <Navbar color="faded" light expand="md">
    <NavbarBrand href="/">TradeHub</NavbarBrand>
    <NavbarToggler />
    <Collapse isOpen navbar>
      <Nav className="ml-auto" navbar>
      </Nav>
    </Collapse>
  </Navbar>
);

export default Header;
