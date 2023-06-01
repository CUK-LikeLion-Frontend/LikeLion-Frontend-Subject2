import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import {data} from './data';
import '../App.css';

function Detail() {
    const { title } = useParams();
    const [discount, setDiscount] = useState(true);
    const album = data.find(o => o.title === title);

    useEffect(() => {
        setTimeout(() => {
            setDiscount(false);
        }, 3000);
    }, []);

    return (
        <Container>
            <Alert show={discount} variant="warning">
                3초 안에 구매하면 30프로 할인!
            </Alert>
            <Row className="m-5">
                <Col>
                    <img src={album.img} alt=""/>
                </Col>
                <Col>
                    
                    <h3>{album.title}</h3>
                    <h5>{album.caption}</h5>
                    <br></br>
                    <h5>{discount ? album.price * 0.7 : album.price } 원</h5>
                    <button className="custom-btn btn-6">주문하기</button>
                </Col>
            </Row>
        </Container>
    
    )
}

export default Detail;