import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import data from "./movies.json";

function AllMovies() {
  return (
    <div>
      <Container
        fluid
        style={{
          padding: "5%",
          background: "pink",
        }}
      >
        <Row style={{ textAlign: "center" }}>
          {data.map((mov) => (
            <Col
              id={mov.id}
              key={mov.id}
              xs={6}
              md={4}
              lg={3}
              style={{ marginBottom: "2%" }}
            >
              <Card
                onClick={() => (window.location.href = "/movies/" + mov.id)}
                style={{cursor:"pointer"}}
              >
                <Card.Img variant="top" src={mov.image} />
                <footer style={{ marginTop: "10px" }}>
                  <div>{mov.title}</div>
                  <div> {mov.actor} </div>
                </footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default AllMovies;
