import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function AllMoviesFetch() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/movies");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
              id={mov._id}
              key={mov._id}
              xs={6}
              md={4}
              lg={3}
              style={{ marginBottom: "2%" }}
            >
              <Card
                onClick={() => (window.location.href = "/movies/" + mov._id)}
                style={{cursor:"pointer"}}
              >
                <Card.Img variant="top" src={mov.imageurl} />
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

export default AllMoviesFetch;
