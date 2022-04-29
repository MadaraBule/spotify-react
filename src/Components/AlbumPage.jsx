import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Container, Card, CardImg, Button } from 'react-bootstrap';
import PlayBar from './Components/PlayBar';
import NavBar from './Components/NavBar';
import "./albumpage.css"

function ArtistPage() {
  return (
    <Container>
      <Row>
        <Col ls={2}>
          <NavBar />
        </Col>
        <Col xs={4}>
          <Card>
<CardImg style={{displayContent:"center"}} src="https://picsum.photos/400" alt="..." />
<CardText>
  <h1>Queen</h1>
  <h4>Download</h4>
  <Button style={{color:"white", backgroundColor:"green"}}>PLAY</Button>
  <h6>some text</h6>
</CardText>
          </Card>
        </Col>
        <Col xs={6}>
            <SongList />
        </Col>
      </Row>
      <PlayBar />
      </Container>
  )
}

export default ArtistPage;
