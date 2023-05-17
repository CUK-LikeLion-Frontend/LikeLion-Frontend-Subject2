import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import	'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, useNavigate } from "react-router-dom";




function NavBar() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="Home">멋사 Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Albums" onClick={()=>{navigate('/albums')}}>Albums</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavBar;