import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const img = location.state.img;
  const title = location.state.title;
  const details = location.state.detail;

  const [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, []);

  return (
    <Container className="p-5">
      <Alert variant="warning">3초 안에 구매하면 30프로 할인!!!</Alert>
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
          <p>{alert ? "14,000원" : "20,000원"}</p>
          <button className="orderBtn">주문하기</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
