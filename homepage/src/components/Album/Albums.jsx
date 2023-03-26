import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import albums from "../../hooks/components/Albums/hook";

const Albums = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {albums.map((album) => (
          <Col md={3}>
            <Link to={`/albums/${album.title}`}>
              <img
                src={album.image}
                alt={album.title}
                className="img-fluid pt-5 mx-auto "
              />
            </Link>
            <div className="d-flex flex-column justify-content-start text-start">
              <h3>{album.title}</h3>
              <p>{album.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Albums;
