import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const img = location.state.img;
  const title = location.state.title;
  const details = location.state.detail;

  return (
    <Container className="p-5">
      <Row>
        <Col>
          <img
            className="col-4"
            style={{ width: "500px" }}
            alt={id}
            src={img}
          />
        </Col>
        <Col>
          <p>
            <div className="album-title">{title}</div>
            <div className="album-detail">{details}</div>
          </p>
          <p>20,000원</p>
          <button className="orderBtn">주문하기</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
