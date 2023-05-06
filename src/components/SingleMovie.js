import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import data from "./movies.json";
import { useParams } from "react-router";

function SingleMovie() {
  const { movid } = useParams();
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
          {data.map((mov) => {
            if (mov.id == movid) {
              return (
                <Col
                  id={mov.id}
                  key={mov.id}
                  xs={6}
                  md={4}
                  lg={3}
                  style={{ marginBottom: "2%" }}
                >
                  <Card>
                    <Card.Img variant="top" src={mov.image} />

                    <footer style={{ marginTop: "10px" }}>
                      <div>{mov.title}</div>
                      <div> {mov.actor} </div>
                    </footer>
                  </Card>
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SingleMovie;
