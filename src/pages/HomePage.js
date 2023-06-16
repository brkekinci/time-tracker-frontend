import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container fluid style={{ backgroundColor: "#B1D4E0", height: "100vh" }}>
        <Row className="justify-content-center">
          <Col xs="auto" className="d-flex align-items-center">
            <div style={{ marginTop: "100px" }} className="logo-container">
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" />
            </div>
          </Col>
          <Col
            xs="auto"
            className="d-flex align-items-center justify-content-end"
          >
            <div
              style={{
                marginLeft: "20px",
                color: "#0C2D48",
              }}
              className="hero-content text-center"
            >
              <h1 style={{fontSize: "56px"}} className="hero-title">Welcome to Time Tracker</h1>
              <p style={{fontSize: "24px", marginTop:"24px"}} className="hero-description">
                Easily Track Working Hours Of Your Employees
              </p>
              <button style={{ marginTop:"24px", backgroundColor: "#2E8BC0" }} className="btn">
                Get Started
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
