import {Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Album(){
  return(
    <Container>
      <Row className="mt-5 pt-5 pb-3">
        <Col>
          <Link to="/albums/1">
            <Image src={'img/album1.jpg'} style={{width:'350px', height:'350px'}}/><br />
          </Link>
          <strong>화양연화 pt.2</strong><br />
          The 4th Mini Album
        </Col>
        <Col>
          <Link to="/albums/2">
            <Image src={'img/album2.jpg'} style={{width:'350px', height:'350px'}}/><br />
          </Link>
          <strong>LOVE YOURSELF 轉 'Tear'</strong><br />
          The 3rd Album
        </Col>
        <Col>
          <Link to="/albums/3">
           <Image src={'img/album3.jpg'} style={{width:'350px', height:'350px'}}/><br />
          </Link>
          <strong>MAP OF THE SOUL : 7</strong><br />
          The 4th Album
        </Col>
      </Row>
    </Container>

  );
}

export default Album;