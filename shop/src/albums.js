import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ALBUMS = (props) => {
    return (
        <>       
        <Container>
        <ul> 

            <Row>
                <Col          
                    className='product-contents'>
                     <Link to="/product/1" style={{textDecoration: 'none'}}>
                     <img className="product-img" alt="LovePoem" src="img/LovePoem.jpg" />				
                     <div className='product-name'> LovePoem </div>
                     <div className='product-subtext'>The 5th MiniAlbum</div>
                </Link>
                    
                </Col>


                <Col className='product-contents'>
                    <Link to="/product/2" style={{textDecoration: 'none'}}>
                    <div></div>
                    <img className="product-img" alt="Palette" src="img/Palette.jpg" />				
                    <div className='product-name'>Palette</div>
                    <div className='product-subtext'>The 5th Album</div>
                    </Link>
                </Col>

                <Col className='product-contents'>
                    <Link to="/product/3" style={{textDecoration: 'none'}}>
                    <img className="product-img" alt="Lilac" src="img/Lilac.jpg" />				
                    <div className='product-name'>Lilac</div>
                    <div className='product-subtext'>The 4th Album</div>
                    
                    </Link>
                    </Col>
             </Row>
             </ul>
        </Container>
                
        </>
    );
}

export default ALBUMS;