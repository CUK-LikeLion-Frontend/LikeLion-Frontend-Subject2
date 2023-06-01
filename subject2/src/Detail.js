import { Container, Row, Col, Alert } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Albums.css'
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const { state } = useLocation();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 3000);
  }, []);
  return (
    <Container className="albums p-5">
      <Alert show={visible} variant="warning">
        3초 안에 구매하면 30프로 할인!!!
      </Alert>
      <Row>
        <Col>
          <img className="album-img" src={process.env.PUBLIC_URL + state?.img} alt={id} />
        </Col>
        <Col className="mt-5">
          <p className="album-title">{id}</p>
          <p className="album-subtitle">{state?.subtitle}</p>
          <p className="album-subtitle">{visible ? "14,000원" : "20,000원"}</p>
          <button className="order-btn">주문하기</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;