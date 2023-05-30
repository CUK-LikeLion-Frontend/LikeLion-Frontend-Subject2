import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Detail(props) {
  let { id } = useParams(); // url에서 id 가져오기
  let data = props.data; 
  let album = data.find(item => item.id === parseInt(id)); // album 데이터 배열에서 해당 id 해당하는 앨범 찾기
  let [discounted, setDiscounted] = useState(false); // discounted는 할인 여부 나타내는 상태값

  // 3초 후에 setDiscounted 호출해서 discounted 값 true로 업데이트
  useEffect(() => {
    const timer = setTimeout(() => {
      setDiscounted(true);
    }, 3000); 

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되었을 때 타이머 해제
  }, []);

  let originalPrice = parseInt(album.price); // 할인 전 가격 정수로 변환
  let discountedPrice = originalPrice * 0.7;  // 할인된 가격 계산

  return (
    <Container className="mt-5">
      { !discounted ? ( // !discounted가 true일 경우 Alert 컴포넌트 렌더링
        <Alert variant="warning">
          3초 안에 구매하면 30% 할인!!!
        </Alert>
      ) : null}
      <Row className="align-items-center">
        <Col>
          <Image src={album.image} style={{ width: '500px', height: '500px' }} />
        </Col>
        <Col>
          <h2>{album.title}</h2>
          <h5 className="text-muted">{album.subtitle}</h5>
          <h3 className="mt-4">
            {discounted ? ( 
              <>
                {originalPrice}원<br /> 
              </>
            ) : ( 
              <>
                {discountedPrice}원<br /> 
              </>
            )}
          </h3>
          <Button variant="primary" className="mt-4" disabled> 
            주문하기 
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
