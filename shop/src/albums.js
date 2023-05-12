import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import album1 from './img/LovePoem.jpg';
import album2 from './img/Palette.jpg';
import album3 from './img/Lilac.jpg';

const ALBUMS = (props) => {
    return (
        <>       <Container>
        <ul> 

            <Row>
                <Col className='product-contents'>
                    <Link to="/product/1" style={{textDecoration: 'none'}}> 
                     <img className="product-img" src={album1} />				
                     <div className='product-name' >LovePoem</div>
                     <div className='product-subtext'>The 5th MiniAlbum</div>

                    
                </Link></Col>


                <Col className='product-contents'>
				<Link to="/product/2" style={{textDecoration: 'none'}}>
                    <img className="product-img" src={album2} />				
                    <div className='product-name' >Palette</div>
                    <div className='product-subtext'>The 5th Album</div>

                    </Link></Col>

                <Col className='product-contents'>
				<Link to="/product/3" style={{textDecoration: 'none'}}>
                    <img className="product-img" src={album3} />				
                    <div className='product-name' >Lilac</div>
                    <div className='product-subtext'>The 4th Album</div>
                    
                    </Link></Col>
             </Row>
             </ul>

        </Container>
                
            
        </>
    );
}

export default ALBUMS;