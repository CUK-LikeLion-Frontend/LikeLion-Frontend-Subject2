import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Albums.css";
import { AlbumData } from "./AlbumData";

function Albums() {
  return (
    <Container>
      <Row>
        {AlbumData.map((AlbumData) => (
          <Col className="m-3">
            <Link to={`/detail/${AlbumData.title}`}>
              <img
                className="albums-img"
                src={AlbumData.img}
                alt={AlbumData.title}
              />
            </Link>
            <p className="album-title">{AlbumData.title}</p>
            <p className="album-caption">{AlbumData.caption}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Albums;
