import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleMovieFetch() {
  const { movid } = useParams();
  const [singledata, setSingleData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(`https://bms-backend-be5t.onrender.com/movies/${movid}`);
      console.log(response);
      setSingleData([response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();// eslint-disable-next-line
  }, []); 
  return ( // eslint-disable-next-line
    <div>
      <Container
        fluid
        style={{
          padding: "5%",
          background: "pink",
        }}
      >
        <Row style={{ textAlign: "center" }}>
          {singledata.map((movie) => {
            return (
              <Col
                id={movie._id}
                key={movie._id}
                xs={6}
                md={4}
                lg={3}
                style={{ marginBottom: "2%" }}
              >
                <Card>
                  <Card.Img variant="top" src={movie.imageurl} />

                  <footer style={{ marginTop: "10px" }}>
                    <div>{movie.title}</div>
                    <div> {movie.actor} </div>
                  </footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SingleMovieFetch;

/* useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://bms-backend-be5t.onrender.com/movies/${movid}`);
        console.log(response);
        setSingleData([response.data]);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */
