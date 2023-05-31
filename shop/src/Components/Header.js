import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
      <Navbar bg="gray" variant="gray">
        <Container>
          <Navbar.Brand href="/">
            <h3>멋사SHOP</h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/product">Albums</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;