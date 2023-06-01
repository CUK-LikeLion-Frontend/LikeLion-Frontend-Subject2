import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css";
import { Link } from 'react-router-dom';
import { data  } from './data';

function Albums() {
  return (
    <Container>
      <Row>
        {data.map((data) => (
          <Col>
          <Link to={`/detail/${data.title}`}>
          <img src={data.img} alt='album-cover' className='album'/></Link>
            <br></br>
            <h3>{data.title}</h3>
            <h6>{data.caption}</h6>
        </Col>

        ))}
      </Row>
    </Container>
  );
}

export default Albums;