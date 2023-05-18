import LovePoem from "../src/img/LovePoem.jpg";
import Lilac from "../src/img/Lilac.jpg";
import Palette from "../src/img/Palette.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Albums() {
  return (
    <Container className="p-3" >
      <Row>
        <Col className="m-3">
          <Row>
            <img src={LovePoem} alt="Album 1" />
            <h2>Love poem</h2>
            <p>The 5th Mini Album</p>
          </Row>
        </Col>
        <Col className="m-3">
          <Row>
            <img src={Lilac} alt="Album 2" />
            <h2>LILAC</h2>
            <p>The 5th Album</p>
          </Row>
        </Col>
        <Col className="m-3">
          <Row>
            <img src={Palette} alt="Album 3" />
            <h2>Palette</h2>
            <p>The 4th Album</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Albums;


