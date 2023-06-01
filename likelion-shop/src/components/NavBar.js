import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar , Nav } from "react-bootstrap";

function NavBar() {
    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">멋사 SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/albums">Album</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;