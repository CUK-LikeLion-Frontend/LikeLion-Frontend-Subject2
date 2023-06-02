import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>멋사 shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/albums")}>Albums</Nav.Link>
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
