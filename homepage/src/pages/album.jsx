import { Layout } from "../components/Layout/layout";
import Firstimg from "../assets/firstimg.jpg";
import Secondimg from "../assets/secondimg.jpg";
import Thirdimg from "../assets/thirdimg.jpg";
import React from "react";
import { Row, Col } from "react-bootstrap";

function Album() {
  return (
    <Layout>
      <Row>
        <Col md={4}>
          <img src={Firstimg} alt="Firstimg" className="imgsize" />
        </Col>
        <Col md={4}>
          <img src={Secondimg} alt="Secondimg" className="imgsize" />
        </Col>
        <Col md={4}>
          <img src={Thirdimg} alt="Thirdimg" className="imgsize" />
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <h5 className="text">
            <b>Love poem</b>
          </h5>
        </Col>
        <Col md={4}>
          <h5 className="text">
            <b>LILAC</b>
          </h5>
        </Col>
        <Col md={4}>
          <h5 className="text">
            <b>Pelette</b>
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h6 className="text">The 5th Mini Album</h6>
        </Col>
        <Col md={4}>
          <h6 className="text">The 5th Album</h6>
        </Col>
        <Col md={4}>
          <h6 className="text">The 4th Album</h6>
        </Col>
      </Row>
    </Layout>
  );
}

export default Album;
