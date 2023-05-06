import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardSlider() {
  return (
    <div style={{ padding: "80px" }}>
      <Carousel   variant="dark">
        <Carousel.Item>
          <CardGroup>
            <Card
              className="bg-light "
              border="light"
              style={{
                width: "300px",
                height: "300px",
                padding: "15px",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Card.Img src="cardslider.png" alt="Card image" />
            </Card>

            <Card
              className="bg-light "
              border="light"
              style={{ width: "300px", height: "300px", padding: "15px" }}
            >
              <Card.Img src="workshop-and-more.png" alt="Card image" />
            </Card>
            <Card
              className="bg-light"
              border="light"
              style={{ width: "300px", height: "300px", padding: "15px" }}
            >
              <Card.Img src="kids-zone.jpg" alt="Card image" />
            </Card>
            <Card
              className="bg-light"
              border="light"
              style={{ width: "300px", height: "300px", padding: "15px" }}
            >
              <Card.Img src="comedy-shows.png" alt="Card image" />
            </Card>
            <Card
              className="bg-light"
              border="light"
              style={{ width: "300px", height: "300px", padding: "15px" }}
            >
              <Card.Img src="esports.png" alt="Card image" />
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item slide={false}>
          <CardGroup
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Card
              className="bg-light"
              border="light"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="arts-crafts.png" alt="Card image" />
            </Card>
            <Card
              className="bg-light"
              border="light"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="theatre-shows.png" alt="Card image" />
            </Card>
            <Card
              className="bg-light"
              border="light"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="dance-classes.png" alt="Card image" />
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>

      <div style={{ margin: "80px", width: "100%" }}>
        <img src="stream.png" style={{ width: "1240px" }}></img>
      </div>
    </div>
  );
}

export default CardSlider;
