import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premier() {
  return (
    <div style={{ backgroundColor: "#2B3148" }}>
      <div style={{ width: "1200px", height: "103px", padding: "80px" }}>
        <img src="./premiere.jpg"></img>
      </div>

      <div style={{ padding: "80px" }}>
        <div style={{ color: "white" }}>
          <h2>Premiers</h2>
          <h6>Brand new releases every Friday</h6>
        </div>
        <Carousel indicators={false} variant="dark">
          <Carousel.Item>
            <CardGroup>
              <Card
                style={{
                  backgroundColor: "#2B3148",
                  color: "#fff",
                  borderRadius: "15px",
                  position:"relative",
                  border:"none"
                }}
              >
                <Card.Img
                  variant="top"
                  src="priemer-pic.jpg"
                  style={{
                    borderRadius: "10px",
                    width: "222px",
                    height: "360px",
                    position:"absolute",
                    width:"100%"
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
                  backgroundColor: "#2B3148",
                  color: "#fff",
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
              <Card
                style={{
                  paddingLeft: "18px",
                  backgroundColor: "#2B3148",
                  color: "#fff",
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
              <Card
                style={{
                  paddingLeft: "18px",
                  backgroundColor: "#2B3148",
                  color: "#fff",
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
              <Card
                style={{
                  paddingLeft: "18px",
                  backgroundColor: "#2B3148",
                  color: "#fff",
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

export default Premier;
