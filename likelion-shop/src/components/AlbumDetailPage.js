import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const AlbumDetailPage = (props) => {
  let { id } = useParams();

  return (
    <Container>
      <Row>
        <Col md>
          <img src="/Lilac.jpg" className="albumImg" alt="lilac-img"></img>
        </Col>
      </Row>
    </Container>
  );
};

export default AlbumDetailPage;
