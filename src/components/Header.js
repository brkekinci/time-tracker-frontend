import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { sign_out } from "../actions/auth.actions";

const HeaderTest = () => {
  let isSignedIn = false;
  let userObj;
  const user = localStorage.getItem("user");
  if (user) {
    userObj = JSON.parse(user);
    isSignedIn = true;
  }
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
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/reports">User Reports</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
          {isSignedIn ? <Navbar.Text className="me-5">{userObj?.email}</Navbar.Text> : null}
            <Nav.Link
              onClick={isSignedIn ? sign_out() : null}
              href={isSignedIn ? "/" : "/signin"}
            >
              {isSignedIn ? "Sign Out" : "Sign In"}
            </Nav.Link>
            {!isSignedIn ? <Nav.Link href="signup">Sign Up</Nav.Link> : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default HeaderTest;
