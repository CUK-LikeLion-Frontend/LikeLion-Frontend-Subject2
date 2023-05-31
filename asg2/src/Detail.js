import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

import LovePoem from "../src/img/LovePoem.jpg";
import Lilac from "../src/img/Lilac.jpg";
import Palette from "../src/img/Palette.jpg";

function Detail() {
  const { albumId } = useParams();

  let albumTitle, albumSubtitle, albumPrice, albumImage;

  // 앨범 ID에 따라 앨범 정보 할당 , 2만원으로 통일
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

  // 가격을 숫자로 변환
  const originalPrice = parseInt(albumPrice.replace(/[^0-9]/g, ''));
  const [showSaleAlert, setShowSaleAlert] = useState(false);

  useEffect(() => {
    // 3초 후에 할인 알림 창을 사라지게 설정
    const timer = setTimeout(() => {
      setShowSaleAlert(false);
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머 클리어
    return () => clearTimeout(timer);
  }, []);

  const handlePurchase = () => {
    setShowSaleAlert(true);
  };

  return (
    <div className="detail">
      <Container>
        {showSaleAlert && (
          <Alert
            variant="warning"
            onClose={() => setShowSaleAlert(false)}
            dismissible
            className="mt-3"
            style={{ backgroundColor: 'lightorange', color: 'black' }}
          >
            3초 안에 구매하면 30% 세일 중! 가격: {originalPrice * 0.7}원
          </Alert>
        )}
        <Row>
          <Col>
            <img src={albumImage} alt={albumTitle} style={{ width: '100%' }} />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div style={{ marginTop: '10px' }}>
              <h2 style={{ textAlign: 'left', marginBottom: '5px' }}>{albumTitle}</h2>
              <p style={{ textAlign: 'left', marginBottom: '5px' }}>{albumSubtitle}</p>
              <p style={{ textAlign: 'left', marginBottom: '5px' }}>
                Price: {showSaleAlert ? `${originalPrice * 0.7}원` : albumPrice}
              </p>
              <Button onClick={handlePurchase} disabled={showSaleAlert}>
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
