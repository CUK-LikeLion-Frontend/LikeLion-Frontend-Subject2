import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import albums from "../hooks/components/Albums/hook";
import SaleAlert from "../utils/saleAlert";

function AlbumDetail() {
  const { title } = useParams();
  const album = albums.find((album) => album.title === title);
  const [showDiscount, setShowDiscount] = useState(true);
  const [time, setTime] = useState(3);
  const [discount, setDiscount] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiscount(false);
    }, time * 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const price = showDiscount ? album.price * (1 - discount / 100) : album.price;

  return (
    <div className="container">
      <SaleAlert time={time} discount={discount} alert={showDiscount} />
      <Row className="my-5">
        <Col
          xs={12}
          sm={6}
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={album.image} alt={album.title} className="img-fluid" />
        </Col>
        <Col
          xs={12}
          sm={6}
          md={5}
          className="d-flex flex-column justify-content-center align-items-start"
        >
          <h1>{album.title}</h1>
          <p>{album.description}</p>
          <p>{price.toLocaleString()}원</p>
          <Button>주문하기</Button>
        </Col>
      </Row>
    </div>
  );
}

export default AlbumDetail;
