import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Navbar
      className='shadow'
      collapseOnSelect
      bg='light'
      expand='lg'
      fixed='top'
    >
      <Container>
        <LinkContainer to='/home'>
          <Navbar.Brand>DevNet</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <IndexLinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to='/profile'>
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <Nav.Link
              onClick={() => {
                dispatch(logout());
                history.push('/');
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
