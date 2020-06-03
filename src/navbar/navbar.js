import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css';
class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand href="#home">
            {' '}
            <img
              src="https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg"
              alt="hubspot"
              style={{
                width: '120px',
                backgroundColor: '#fff',
              }}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav pullRight>
              <NavDropdown title="Software" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Free hubSpot CRM
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Marketing Hub
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Sales Hub
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Service Hub
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Customer Stories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Developers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ebooks</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Partners" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Customer Stories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Developers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ebooks</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Customer Stories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Developers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ebooks</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
