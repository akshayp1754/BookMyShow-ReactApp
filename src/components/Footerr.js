import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <div style={{background:"#313035", color:"white"}}>
       <Container expand="lg"  style={{backgroundColor:"black"}}>
        <Row style={{display:"", justifyContent:"flex-start", flexWrap:"wrap"}}>
         <Col>List your Show </Col> 
         <Col style={{width:"100%",padding:"0px", textAlignLast:"left"}}>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow </Col> 
         <Col> <a>Contact Today!</a> </Col>
         </Row>
        <Row><Col></Col><Col></Col></Row>
        </Container>
    </div>
  )
}

export default Footer
