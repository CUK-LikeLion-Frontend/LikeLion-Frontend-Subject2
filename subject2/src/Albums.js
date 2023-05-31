import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Albums.css'
import { Link } from 'react-router-dom';

function Albums() {
  const albums = [
    "Lilac", "LovePoem", "Palette"
  ];

  // const albums = [
  //   {id : 0, name : "Lilac", title : "The 5th Album"},
  //   {id : 1, name : "LovePoem", title : "The 5th Mini Album"},
  //   {id : 2, name : "Palette", title : "The 4th Album"},
  // ];

  return (
    <Container className='p-5'>
      <Row>
        <Col>
        <Link to={`/detail/${albums[0]}`}>
        <img className="col-8" src="/images/Lilac.jpg"/>
        </Link>
        <p>LILAC</p>
        <p className="album-sub">The 5th Album</p>        
        </Col>        
        <Col>
        <Link to={`/detail/${albums[1]}`}>
        <img className="col-8" src="/images/LovePoem.jpg" />
        </Link>
        <p>Love poem</p>
        <p className="album-sub">The 5th Mini Album</p>
        </Col>
        <Col>        
        <Link to={`/detail/${albums[2]}`}>
        <img className="col-8" src="/images/Palette.jpg" />
        </Link>
        <p>Palette</p>
        <p className="album-sub">The 4th Album</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Albums;