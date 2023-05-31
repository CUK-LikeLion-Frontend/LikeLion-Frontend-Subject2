import { Layout } from "../components/Layout/layout";
import Firstimg from "../assets/firstimg.jpg";
import Secondimg from "../assets/secondimg.jpg";
import Thirdimg from "../assets/thirdimg.jpg";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Album() {
  return (
    <Layout>
      <Row>
        <Col md={4}>
          <Link to="/albums/1">
            <img src={Firstimg} alt="Firstimg" className="imgsize" />
          </Link>
          <h5 className="text">
            <b>Love poem</b>
          </h5>
          <h6 className="text">The 5th Mini Album</h6>
        </Col>
        <Col md={4}>
          <Link to="/albums/2">
            <img
              src={Secondimg}
              alt="Secondimg"
              className="imgsize"
              aria-current="page"
              href="/albums/albumDetail"
            />
          </Link>
          <h5 className="text">
            <b>LILAC</b>
          </h5>
          <h6 className="text">The 5th Album</h6>
        </Col>
        <Col md={4}>
          <Link to="/albums/3">
            <img
              src={Thirdimg}
              alt="Thirdimg"
              className="imgsize"
              aria-current="page"
              href="/albums/albumDetail"
            />
          </Link>
          <h5 className="text">
            <b>Palette</b>
          </h5>
          <h6 className="text">The 4th Album</h6>
        </Col>
      </Row>
    </Layout>
  );
}

export default Album;
