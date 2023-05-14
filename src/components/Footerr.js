import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div style={{ background: "black", color: "white" }}>
      <Container style={{ backgroundColor: "black", padding: "20px" }}>
        <Row
          className="d-flex"
          style={{
            display: "",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Col>Col 1 </Col>
          <Col style={{ width: "100%", padding: "0px", textAlignLast: "left" }}>
            col 2
          </Col>
          <Col style={{}}>
            {" "}
            <Button variant="danger" style={{}}>
              Contact Today!
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
