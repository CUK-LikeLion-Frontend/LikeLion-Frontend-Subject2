import Lilac from "../assets/Lilac.jpg";
import LovePoem from "../assets/LovePoem.jpg";
import Palette from "../assets/Palette.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Albums = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={3}>
          <img src={Lilac} alt="mainImg" className="img-fluid pt-5 mx-auto " />
          <div className="d-flex flex-column justify-content-start text-start">
            <h3>Lilac</h3>
            <p>The 5th Mini Album</p>
          </div>
        </Col>
        <Col md={3}>
          <img
            src={LovePoem}
            alt="mainImg"
            className="img-fluid pt-5 mx-auto "
          />
          <div className="d-flex flex-column justify-content-start text-start">
            <h3>LovePoem</h3>
            <p>The 5th Album</p>
          </div>
        </Col>
        <Col md={3}>
          <img src={Palette} alt="mainImg" className="img-fluid pt-5 mx-auto" />
          <div className="d-flex flex-column justify-content-start text-start">
            <h3>Palette</h3>
            <p>The 4th Album</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Albums;
