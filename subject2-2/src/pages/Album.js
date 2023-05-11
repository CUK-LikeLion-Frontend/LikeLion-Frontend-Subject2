import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lilac from '../image/album/Lilac.jpg';
import LovePoem from '../image/album/LovePoem.jpg';
import Palette from '../image/album/Palette.jpg';

function AlbumPage() {
    return (
        <Container>
            <Row className='m-5'>
                <Col><img src={Lilac} className='album-cover' />
                    <br></br>
                    <h4>Lilac</h4>
                    <h6>The 5th Album</h6></Col>
                <Col><img src={LovePoem} className='album-cover' />
                    <br></br>
                    <h4>Love Poem</h4>
                    <h6>The 5th Mini Album</h6></Col>
                <Col><img src={Palette} className='album-cover' />
                    <br></br>
                    <h4>Palette</h4>
                    <h6>The 4th Album</h6></Col>
            </Row>
        </Container>
    );
}

export default AlbumPage;