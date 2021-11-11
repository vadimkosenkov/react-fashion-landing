import React from "react";
import "./Header.scss";
import triangle from "./../../assets/Triangle.svg";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Navbar className="navbar">
        <Container className="navbar__container d-flex align-items">
          <Navbar.Brand
            href="home"
            className="navbar__title d-flex align-items-center"
          >
            <img
              alt="icon:triangle"
              src={triangle}
              width="67"
              className="navbar__triangle d-inline-block align-top"
            />
            penrose
          </Navbar.Brand>
          <Nav className="navbar__nav">
            <Nav.Link href="home" disabled>
              Home
            </Nav.Link>
            <Nav.Link href="new_collections">New collections</Nav.Link>
            <NavDropdown title="Store" id="basic-nav-dropdown">
              <NavDropdown.Item href="women">Women</NavDropdown.Item>
              <NavDropdown.Item href="men">Men</NavDropdown.Item>
              <NavDropdown.Item href="kids">Kids</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar expand={false} className="burger-menu">
        <Container fluid>
          <Navbar.Brand href="home" />
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="home" disabled>
                  Home
                </Nav.Link>
                <Nav.Link href="new_collections">New collections</Nav.Link>
                <NavDropdown title="Store" id="basic-nav-dropdown">
                  <NavDropdown.Item href="women">Women</NavDropdown.Item>
                  <NavDropdown.Item href="men">Men</NavDropdown.Item>
                  <NavDropdown.Item href="kids">Kids</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="contacts">Contacts</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
