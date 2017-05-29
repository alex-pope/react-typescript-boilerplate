import * as React from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
const StarterTemplateNav = () => (
    <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">react-typescript-boilerplate</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#about">About</NavItem>
                <NavItem eventKey={2} href="#contact">Contact</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
export { StarterTemplateNav };