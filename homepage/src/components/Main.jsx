import MainImg from "../assets/banner.jpg";
import { Container, Row, Col } from "react-bootstrap";

const MainPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img
            src={MainImg}
            alt="mainImg"
            className="img-fluid py-5 w-10 px-5"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
