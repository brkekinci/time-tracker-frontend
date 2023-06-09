import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderTest = () => {
  const isSignedIn = false;
  return (
    <Navbar
      expand="md"
      style={{
        backgroundColor: "#2E8BC0",
        height: "80px",
        fontSize: "20px",
        position: "sticky",
        top: 0,
        width: "100%",
      }}
    >
      <Container>
        <Navbar.Brand href="/">Time Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sample">Sample</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href={isSignedIn ? "/sign-out" : "/sign-in"}>
              {isSignedIn ? "Sign Out" : "Sign In"}
            </Nav.Link>
            {!isSignedIn ? <Nav.Link href="sign-up">Sign Up</Nav.Link> : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default HeaderTest;
