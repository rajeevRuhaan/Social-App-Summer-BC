import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <div>
      {" "}
      <Navbar bg="light" expand="lg" className="mr-auto my-2 my-lg-1">
        <Navbar.Brand href="/">
          <h3>Summer-Project</h3>
        </Navbar.Brand>

        <Nav>
          <LinkContainer exact to="/login">
            <Nav.Link> login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link> Register</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
