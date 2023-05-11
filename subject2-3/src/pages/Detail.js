import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Detail() {
    const { item_id } = useParams();
    const [price, setPrice] = useState(17000);
    useEffect(() => {
        setTimeout(() => {
            setPrice(20000);
        }, 3000);
    })

    let data = [
        {
            title: 'Lilac',
            imgUrl: '/albums/Lilac.jpg',
            subtitle: 'The 5th Album',
        },
        {
            title: 'LovePoem',
            imgUrl: '/albums/LovePoem.jpg',
            subtitle: 'The 5th Mini Album',
        },
        {
            title: 'Palette',
            imgUrl: '/albums/Palette.jpg',
            subtitle: 'The 4th Album',
        }
    ]
    const album = data.find(o => o.title == item_id);
    return (
        <div >
            
            <Container>
                <Row>{discount(price)}</Row>
                <Row className="m-5">
                    <Col>
                        <img src={album.imgUrl} width={600} height={600} />

                    </Col>
                    <Col>
                        <div style={{height: '50px'}}></div>
                        <h3>{album.title}</h3>
                        <h5>{album.subtitle}</h5>
                        <br></br>
                        <h5>{price.toLocaleString()} 원</h5>
                        <Button variant="primary">주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function discount(price) {
    if (price == 17000) {
        return (
            <Alert key='warning' variant='warning'>
                3초 안에 구매하면 30프로 할인!!!
            </Alert>
        )
    }
    else return;
}

export default Detail;