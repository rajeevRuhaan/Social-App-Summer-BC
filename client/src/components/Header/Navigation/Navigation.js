import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">DevNet</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <IndexLinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </IndexLinkContainer>
                        <LinkContainer to="/profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/logout">
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;