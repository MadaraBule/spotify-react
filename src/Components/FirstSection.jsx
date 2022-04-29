import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { render } from '@testing-library/react';

const FirstSection = () => (
  // componentDidMount(),{
  //   fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + SearchQuery, {
  //   .then(item.json())
  //   .then( "POST", {
  //       this:setState({
  //         isLoaded: true,
  //         items: result.items
  //       }),
  //     }
  //   )
  // }
  //   render(){
    <Container>
<Row xs={12}>
                <Row xs={1}>
                 <Card style={{color:"white", backgroundColor:"#282828", width:"200px", height:"200px", paddingLeft:"10px"}}>
                      <img
                        src="https://picsum.photos/150"
                        alt="..."
                      />
                      <Card.Body style={{color:"white", backgroundColor:"#282828"}}>
                        <Card.Title>Card title</Card.Title>
                      </Card.Body>
                  </Card>
                  </Row>
                  <Row xs={1}>
                  <Card style={{color:"white", backgroundColor:"#282828", width:"200px", height:"200px", paddingLeft:"10px"}}>
                      <img
                        src="https://picsum.photos/150"
                        alt="..."
                      />
                       <Card.Body style={{color:"white", backgroundColor:"#282828"}}>
                        <Card.Title>Card title</Card.Title>
                      </Card.Body>
                  </Card>
                  </Row>
                  <Row xs={1}>
                 <Card style={{color:"white", backgroundColor:"#282828", width:"200px", height:"200px", paddingLeft:"10px"}}>
                      <img
                        src="https://picsum.photos/150"
                        alt="..."
                      />
                       <Card.Body style={{color:"white", backgroundColor:"#282828"}}>
                        <Card.Title>Card title</Card.Title>
                      </Card.Body>
                  </Card>
                  </Row>
                  <Row xs={1}>
                 <Card style={{color:"white", backgroundColor:"#282828", width:"200px", height:"200px", paddingLeft:"10px"}}>
                      <img
                        src="https://picsum.photos/150"
                        alt="..."
                      />
                       <Card.Body style={{color:"white", backgroundColor:"#282828"}}>
                        <Card.Title>Card title</Card.Title>
                      </Card.Body>
                  </Card>
                  </Row>
                  <Row xs={1}>
                  <Card style={{color:"white", backgroundColor:"#282828", width:"200px", height:"200px", paddingLeft:"10px"}}>
                      <img
                        src="https://picsum.photos/150"
                        alt="..."
                      />
                       <Card.Body style={{color:"white", backgroundColor:"#282828"}}>
                        <Card.Title>Card title</Card.Title>
                      </Card.Body>
                  </Card>
                  </Row>
                </Row>
</Container>
  );
export default FirstSection