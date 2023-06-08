import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'lightblue', position: 'fixed', bottom: 0, left: 0, right: 0, height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container className="text-center">
        <p style={{ margin: 0, fontSize: '16px' }}>&copy; 2023 Time Tracker. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
