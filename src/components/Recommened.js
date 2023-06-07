import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Recommened() {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      

      <div style={{ padding: "80px" }}>
          <h3>Recommened Movies</h3>       
        <Carousel indicators={false} variant="dark">
          <Carousel.Item>
            <CardGroup>
            
            <Card style={{}}>
        <Card.Img variant="top" src="salman.jpg" style={{height:"350px",borderRadius: "10px", border:"none"}}/>
        <Card.Body>
          <Card.Text>
          Shazam! Fury of the Gods English
          </Card.Text>
        </Card.Body>
      </Card>
     
      
             
              <Card 
                style={{
                  paddingLeft: "18px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "15px",
                  color: "black",
                  border:"none"
                }}
              >
                <Card.Img
                  variant="top"
                  src="bholaa.jpg"
                  style={{
                    borderRadius: "10px",
                    width: "222px",
                    height: "360px",
                  }}
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
              <Card
                style={{
                  paddingLeft: "18px",
                  backgroundColor: "#f5f5f5",
                  color: "black",
                  border:"none",
                  borderRadius: "15px",
                }}
              >
                <Card.Img
                  variant="top"
                  src="samantha.jpg"
                  style={{
                    borderRadius: "10px",
                    width: "222px",
                    height: "360px",
                  }}
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
              <Card
                style={{
                  paddingLeft: "18px",
                  backgroundColor: "#f5f5f5",
                  color: "black",
                  border:"none",
                  borderRadius: "15px",
                }}
              >
                <Card.Img
                  variant="top"
                  src="biryani.jpg"
                  style={{
                    borderRadius: "10px",
                    width: "222px",
                    height: "360px",
                  }}
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
              <Card
                style={{
                  paddingLeft: "18px",
                  backgroundColor: "#f5f5f5",
                  color: "black",
                  border:"none",
                  borderRadius: "15px",
                }}
              >
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  style={{
                    borderRadius: "10px",
                    width: "222px",
                    height: "360px",
                  }}
                />

                <footer style={{ marginTop: "10px" }}>
                  <div>Shazam! Fury of the Gods</div>
                  <div>English</div>
                </footer>
              </Card>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Recommened;
