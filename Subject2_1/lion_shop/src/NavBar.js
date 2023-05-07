import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import	'bootstrap/dist/css/bootstrap.css';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">멋사 Shop</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;