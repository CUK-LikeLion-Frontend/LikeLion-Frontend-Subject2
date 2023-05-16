import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Albums = () => {
  const Lilac = require("../img/Lilac.jpg");
  const LovePoem = require("../img/LovePoem.jpg");
  const Palette = require("../img/Palette.jpg");

  const albums = [
    { id: 1, img: LovePoem, title: "Love Peom", detail: "The 5th Mini Album" },
    { id: 2, img: Lilac, title: "Lilac", detail: "The 5th Album" },
    { id: 3, img: Palette, title: "Palette", detail: "The 4th Album" },
  ];

  return (
    <Container className="p-5">
      <Row>
        {albums.map((album) => (
          <Col className="m-3" key={album.id}>
            <Row>
              <Link to={`/${album.id}`}>
                <img
                  className="col-4"
                  style={{ width: "300px" }}
                  src={album.img}
                  alt={album.id}
                />
              </Link>
              <div className="album-title">{album.title}</div>
              <div className="album-detail">{album.detail}</div>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Albums;
