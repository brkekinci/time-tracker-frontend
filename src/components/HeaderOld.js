import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: 'lightblue',
        height: '80px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
      }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: 'none', color: 'darkblue' }}>
            <h1 style={{ fontSize: '24px', margin: 0, padding: 0 }}>
              Time Tracker
            </h1>
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" style={{ color: 'darkblue' }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/sample" style={{ color: 'darkblue' }}>
            Sample
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
