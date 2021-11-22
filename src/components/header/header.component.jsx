import React from 'react';
import logo from '../../assets/IssyAndSonslogo.png';

import {  
  Nav
} from 'react-bootstrap';

import {
  StyledNavbar,
  StyledContainer
} from './header.styles';

const Header = () => {
  return(
    <div>
      <StyledNavbar collapseOnSelect expand="lg" id="styles">
        <StyledContainer>
        <StyledNavbar.Brand href="/"><img src={logo} alt='logo' /></StyledNavbar.Brand>
        <StyledNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <StyledNavbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Welcome</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </StyledNavbar.Collapse>
        </StyledContainer>
      </StyledNavbar>
    </div>
  );
}

export default Header;
