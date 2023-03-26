import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import albums from "../hooks/components/Albums/hook";
import SaleAlert from "../utils/saleAlert";

function AlbumDetail() {
  const [showDiscount, setShowDiscount] = useState(true);
  const { title } = useParams();
  const album = albums.find((album) => album.title === title);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiscount(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const price = showDiscount ? album.price * 0.7 : album.price;

  return (
    <div className="container">
      <SaleAlert time={3} discount={30} />
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
