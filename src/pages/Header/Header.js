import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { logOut, setUser, user } = useAuth();

  return (
    <Navbar
      className="nav-container  "
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>Courier service</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              activeStyle={{ color: "red" }}
              className="fw-bold fs-6 nav-link "
              as={NavHashLink}
              to="/home#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="fw-bold fs-6 "
              as={NavHashLink}
              activeStyle={{ color: "red" }}
              to="/home#service"
            >
              Service
            </Nav.Link>
            <Nav.Link
              className="fw-bold fs-6 "
              as={NavHashLink}
              activeStyle={{ color: "red" }}
              to="/contact"
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              className="fw-bold fs-6 "
              as={NavHashLink}
              activeStyle={{ color: "red" }}
              to="/join"
            >
              Join Team
            </Nav.Link>
          </Nav>
          <Nav>
            {/* here */}

            {user?.displayName ? (
              <span>
                <Nav.Link
                  className="fw-bold fs-6  "
                  as={NavHashLink}
                  activeStyle={{ color: "red" }}
                  to="/addservice"
                >
                  Add Service
                </Nav.Link>
                <Nav.Link
                  className="fw-bold fs-6 "
                  as={NavHashLink}
                  activeStyle={{ color: "red" }}
                  to="/manageorder"
                >
                  Manage Order{" "}
                </Nav.Link>
                <Nav.Link
                  className="fw-bold fs-6 "
                  as={NavHashLink}
                  activeStyle={{ color: "red" }}
                  to="/myorder"
                >
                  My Order
                </Nav.Link>
                <Nav.Link className="fw-bold fs-6 " onClick={logOut}>
                  Logout
                </Nav.Link>
                <Navbar.Text>
                  {user?.email && (
                    <span>
                      Login in as: <a href="#login">{user?.displayName}</a>
                    </span>
                  )}
                </Navbar.Text>
              </span>
            ) : (
              <Nav.Link
                className="fw-bold fs-6 "
                as={NavHashLink}
                activeStyle={{ color: "red" }}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
