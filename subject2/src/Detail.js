import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Albums.css'
import { useParams } from 'react-router-dom';

function Detail() {
    const {name} = useParams();
    const [visible, setVisible] = useState(true); // visible 초기값 true

    useEffect(() => {setTimeout(() => {setVisible(false)}, 3000);
}, []); // useEffect : []에 값이 없으므로 처음 1번만 실행 ([]안의 값이 변할때마다 실행된다.)

    let id;

    if(name == "Lilac"){
        id=0;
    }
    else if(name == "LovePoem"){
        id=1;
    }
    else if(name == "Palette"){
        id=2;
    }

    const titleList = [
        {id : 0, title : "/images/Lilac.jpg", subtitle : "The 5th Album"},
        {id : 1, title : "/images/LovePoem.jpg", subtitle : "The 5th Mini Album"},
        {id : 2, title : "/images/Palette.jpg", subtitle : "The 4th Album"},
      ];
    
  return (
    <>    
    <Container className='p-5'>        
    {visible ? <Alert variant="warning">
	3초 안에 구매하면 30프로 할인!!!
    </Alert> : ""}
      <Row>
        <img className="col-4" src={titleList[id].title} />
        <Col>                
        <h3>{name}</h3>
        <p>{titleList[id].subtitle}</p>

        <p>{visible ? "14,000원" : "20,000원"}</p>
        <Button variant="primary">주문하기</Button>{' '}
        </Col>       
      </Row>
    </Container>
    </>
  );
}

export default Detail;