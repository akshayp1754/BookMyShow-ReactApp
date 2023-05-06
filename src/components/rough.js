import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


function AllMovies() {
  return (
    <div>
      <Container fluid style={{
                  padding:"5%", background:"pink"
                }}>
        <Row style={{textAlign:"center"}}>
          <Col xs={6} md={4} lg={3}  style={{ marginBottom:"2%" }}> 
          <Card>
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
             </Col>
          <Col xs={6} md={4} lg={3}  style={{ marginBottom:"2%" }}> 
          <Card>
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
             </Col>
          <Col xs={6} md={4} lg={3}  style={{ marginBottom:"2%" }}> 
          <Card>
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
             </Col>
          <Col xs={6} md={4} lg={3}  style={{ marginBottom:"2%" }}> 
          <Card>
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
             </Col>
          
        </Row>
        <Row style={{textAlign:"center"}}>
          <Col xs={6} md={4} lg={3}  style={{ marginBottom:"2%" }}> 
          <Card>
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
             </Col>
          <Col xs={6} md={4} lg={3}  style={{ marginBottom:"2%" }}> 
          <Card>
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
             </Col>
          <Col xs={6} md={4} lg={3}  style={{ marginBottom:"2%" }}> 
          <Card>
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
             </Col>
          <Col xs={6} md={4} lg={3}  style={{ marginBottom:"2%" }}> 
          <Card>
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
             </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default AllMovies
