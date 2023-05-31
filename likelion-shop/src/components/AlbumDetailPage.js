import { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { AlbumData } from "./AlbumData";
import { useParams } from "react-router-dom";
import "../styles/Albums.css";

function AlbumDetailPage() {
  const { title } = useParams();
  const [discount, setDiscount] = useState(true);
  const albumData = AlbumData.find((o) => o.title === title);

  useEffect(() => {
    setTimeout(() => {
      setDiscount(false);
    }, 3000);
  }, []);

  return (
    <Container className="mt-5">
      <Alert show={discount} variant="warning">
        3초 안에 구매하면 30프로 할인!!!
      </Alert>
      <Row>
        <Col>
          <img
            className="albums-img"
            src={albumData.img}
            alt={albumData.title}
          ></img>
        </Col>
        <Col>
          <p className="album-title">{albumData.title}</p>
          <p className="album-caption">{albumData.caption}</p>
          <p>{discount ? albumData.price * 0.7 : albumData.price}원</p>
          <button className="order-button">주문하기</button>
        </Col>
      </Row>
    </Container>
  );
}

export default AlbumDetailPage;
