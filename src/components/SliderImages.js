import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div style={{ position: "relative" }}>
      <Carousel fade variant="dark" style={{ padding: "15px" }}>
        <Carousel.Item style={{}}>
          <img className=" w-100" src="./bms.jpg" alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="./bms1.jpg" alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="./bms2.jpg" alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="./bms3.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
