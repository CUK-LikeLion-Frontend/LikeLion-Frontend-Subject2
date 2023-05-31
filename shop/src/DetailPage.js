import {useParams} from 'react-router-dom';
import React from 'react';
import './index.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Detail (props) {
    let { id } = useParams();
    let item = props.Data;
    let product = item.find(item => item.id === parseInt(id));
    
    const [price, setPrice] = useState(14000);
    const [salePrice, setSalePrice] = useState(20000);


    useEffect(() => {
        const timer = setTimeout(() => {
          setSalePrice();
          toast.success('3초간 30% 할인 !!', {
            autoClose: 3000,
            onClose: () => {
              setPrice(salePrice);
            },
          });
        }, 0);
    
        return () => clearTimeout(timer); // cleanup 함수를 이용하여 타이머를 정리
      }, []);
  

    return (
        <Container>
            <ToastContainer position='top-center' />

            <Row>

                <Col className='product-list'>
                <img  className='product-img1' src={product.imgUrl} alt={product.title} />
                </Col>
            <Col className='product-content'>
            


            <div>
                <h2>  {product.title} </h2>
                

                <p className='product-seller'>{price}원</p>
                <p className='product-subtext'>{product.description}</p>
                <p> ---- </p>

                <button>Buy</button>
                

            </div>
            </Col>
            </Row>


        </Container>
    );
 }

 export default Detail;