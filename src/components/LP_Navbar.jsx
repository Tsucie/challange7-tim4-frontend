import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Offcanvas,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { logout } from "../redux/actions/authActions";

const NavbarSection = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-aliceblue">
      {["md"].map((expand) => (
        <Navbar key={expand} bg="aliceblue" expand={expand} className="py-1">
          <Container>
            <Navbar.Brand
              href="/"
              className="bg-primary-darkblue px-5 text-white"
            ></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    href="http://localhost:3000/#ourService"
                    className="fw-bold my-2 mx-2"
                  >
                    Our Service
                  </Nav.Link>
                  <Nav.Link
                    href="http://localhost:3000/#whyUs"
                    className="fw-bold my-2 mx-2"
                  >
                    Why Us
                  </Nav.Link>
                  <Nav.Link
                    href="http://localhost:3000/#testimonial"
                    className="fw-bold my-2 mx-2"
                  >
                    Testimonial
                  </Nav.Link>
                  <Nav.Link
                    href="http://localhost:3000/#faq"
                    className="fw-bold my-2 mx-2"
                  >
                    FAQ
                  </Nav.Link>
                  {!isAuthenticated ? (
                    <Nav.Link href="/register" className="fw-bold">
                      <Button className="bg-button border-0">Register</Button>
                    </Nav.Link>
                  ) : (
                    <>
                      {/* <DropdownButton
                        id="dropdown-basic-button"
                        title="Your Name"
                        className="my-2"
                      >
                        <Dropdown.Item onClick={handleLogout}>
                          Logout
                        </Dropdown.Item>
                      </DropdownButton> */}
                      <Button className="my-2 btn btn-danger" onClick={handleLogout}>
                        Logout
                      </Button>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavbarSection;
