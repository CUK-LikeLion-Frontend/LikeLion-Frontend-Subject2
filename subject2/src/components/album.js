import Lilac from '../img/Lilac.jpg';
import LovePoem from '../img/LovePoem.jpg';
import Palette from '../img/Palette.jpg';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../App.css';


function Album() {
    return(
        <Container className='p-5'>
            <Row className='p-5'>
                <Col>
                <Link to="/detail/Lilac">
                    <img src={Lilac} className='album' alt='react' width="90%"/>
                </Link>    
                <h5>LILCA</h5>
                <p>The 5th mini Album</p>
                </Col>
                <Col>
                <Link to="/detail/LovePoem">
                    <img src={LovePoem} className='album' alt='react' width="90%"/>
                </Link>
                <h5>Love poem</h5>
                <p>The 5th Album</p>
                </Col>
                <Col>
                <Link to="/detail/Palette">
                    <img src={Palette} className='album' alt='react' width="90%"/>
                </Link>
                <h5>Palette</h5>
                <p>The 4th Album</p>
                </Col>
            </Row>
        </Container>
       // <img src={Palette} className='album' alt='react'/>
    );
};


export default Album;
