import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      expand="lg" style={{ backgroundColor: "lightblue", height: "80px", padding: "0", position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "100", }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
            <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1
              style={{
                fontSize: "24px",
                margin: 0,
                padding: "0 20px",
                color: "darkblue",
                lineHeight: "80px",
              }}
            >
              Time Tracker
            </h1>
          </Link>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
