import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Container, Button } from 'react-bootstrap';
import PlayBar from './Components/PlayBar';
import NavBar from './Components/NavBar';
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

function ArtistPage() {
  return (
    <Container>
      <Row>
        <Col ls={2}>
          <NavBar />
        </Col>
        <Col xs={10}>
          <h1>Queen</h1>
          <Row>
          <Button style={{color:"white", backgroundColor:"green"}}>PLAY</Button>
          <Button>FOLLOW</Button>
          </Row>
          <Row>
            <h3>OVERWIEVE</h3>
            <hr>RELATED ARTISTS</hr>
            <h3>ABOUT</h3>
          </Row>
          <FirstSection />
          <SecondSection />
        </Col>
      </Row>
      <PlayBar />
      </Container>
  )
}

export default ArtistPage;
