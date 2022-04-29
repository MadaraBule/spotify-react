import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import PlayBar from './Components/PlayBar';
import NavBar from './Components/NavBar';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Row>
        <Col ls={2}>
          <NavBar />
        </Col>
        <Col xs={10}>
          <h1>SEE ALL</h1>
          <FirstSection />
          <h1>Genre</h1>
          <SecondSection />
          <h1>Something</h1>
          <ThirdSection />
        </Col>
      </Row>
      <PlayBar />
    </div>
  );
}

export default App;
