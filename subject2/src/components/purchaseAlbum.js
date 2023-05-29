import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../App.css';

function PurchaseAlbum() {
  const { albumName } = useParams();
  const [ close, setClose ] = useState(true);
  const [ price, setPrice ] = useState('14,000원');
  const List= [
    {
        id:0,
        title: "Lilac",
        content:"The 5th mini Album",
    },
    {
        id:1,
        title:"LovePoem",
        content:"The 5th Album",
    },
    {
        id:2,
        title:"Palette",
        content:"The 4th Album",
    }
  ]
  

  const selectAlbum = List.find(element => element.title === albumName);

  useEffect(() => {
    // 3초 후에 세일 알림 창을 닫기 위한 setTimeout 사용
    setTimeout(() => {
      setClose(false);
      setPrice("20,000원");
    }, 3000);
  }, []);

  return (
    
    <Container className='p-5'>
            <Row className='p-3'>
            <>
              <Alert variant={'warning'} show={close}>
                  3초 안에 구매하면 30프로 할인!!
              </Alert>
            </>          
                <Col>             
                <img src={ `${process.env.PUBLIC_URL}/img/${albumName}.jpg`} className="album" alt={albumName} width="90%" /> 
                </Col>
                <Col className='p-3'>
                <React.Fragment>
                <h3>{albumName}</h3>
                <p>{selectAlbum.content}</p>
                <p>{price}</p>
                <Button variant="info" size="sm">주문하기</Button>
                </React.Fragment>
                </Col>
            </Row>
        </Container>
  );
}

export default PurchaseAlbum;