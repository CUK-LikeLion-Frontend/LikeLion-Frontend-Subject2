import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";

function Albums() {
  return (
    <Container>
      <Row>
        <Col md>
          <img src="img/Lilac.jpg" className="albumImg" alt="lilac-img"></img>
          <div className="albumTitle">Lilac</div>
          <div className="albumCaption">The 5th Mini Album</div>
        </Col>
        <Col md>
          <img
            src="img/LovePoem.jpg"
            className="albumImg"
            alt="lovepoem-img"
          ></img>
          <div className="albumTitle">Love Poem</div>
          <div className="albumCaption">The 5th Album</div>
        </Col>
        <Col md>
          <img
            src="img/Palette.jpg"
            className="albumImg"
            alt="palette-img"
          ></img>
          <div className="albumTitle">Palette</div>
          <div className="albumCaption">The 4th Album</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Albums;
