import React from 'react'
import {Link } from '@reach/router'
import { Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Rob Haworth Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto px-5">
          <Nav.Link>
            {" "}
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Experience">Experience</Link>
          </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <a href="https://github.com/roberthaworth1234" className="icons">
          <img
            src="https://img.icons8.com/nolan/64/github.png"
            alt="github icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/robert-haworth-142b7a10a/"
          className="icons"
        >
          <img
            src="https://img.icons8.com/nolan/64/linkedin.png"
            alt="linkedin icon"
          />
        </a>
        <a href="https://twitter.com/roberthaworth12" className="icons">
          <img
            src="https://img.icons8.com/nolan/64/twitter.png"
            alt="twitter icon"
          />
        </a>

        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
