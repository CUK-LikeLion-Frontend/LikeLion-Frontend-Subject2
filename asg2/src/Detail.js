import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

import LovePoem from "../src/img/LovePoem.jpg";
import Lilac from "../src/img/Lilac.jpg";
import Palette from "../src/img/Palette.jpg";

function Detail() {
  const { albumId } = useParams();

  let albumTitle, albumSubtitle, albumPrice, albumImage;

  if (albumId === 'love-poem') {
    albumTitle = 'Love poem';
    albumSubtitle = 'The 5th Mini Album';
    albumPrice = '20,000원';
    albumImage = LovePoem;
  } else if (albumId === 'lilac') {
    albumTitle = 'LILAC';
    albumSubtitle = 'The 5th Album';
    albumPrice = '20,000원';
    albumImage = Lilac;
  } else if (albumId === 'palette') {
    albumTitle = 'Palette';
    albumSubtitle = 'The 4th Album';
    albumPrice = '20,000원';
    albumImage = Palette;
  }

  const originalPrice = parseInt(albumPrice.replace(/[^0-9]/g, ''));
  const [showSaleAlert, setShowSaleAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSaleAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="detail">
      <Container>
          <Alert
            variant="warning"
            show={showSaleAlert}s
            style={{ backgroundColor: 'lightorange', color: 'black' }}
          >
            3초 안에 구매하면 30% 세일 중! 가격: {originalPrice * 0.7}원
          </Alert>
        <Row>
          <Col>
            <img src={`${process.env.PUBLIC_URL}/img/${albumTitle}.jpg`} alt={albumTitle} style={{ width: '100%' }} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div style={{ marginTop: '10px' }}>
              <h2 style={{ textAlign: 'left', marginBottom: '5px' }}>{albumTitle}</h2>
              <p style={{ textAlign: 'left', marginBottom: '5px' }}>{albumSubtitle}</p>
              <p style={{ textAlign: 'left', marginBottom: '5px' }}>
                Price: {showSaleAlert ? `${originalPrice * 0.7}원` : albumPrice}
              </p>
              <Button>
                주문하기
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Detail;
