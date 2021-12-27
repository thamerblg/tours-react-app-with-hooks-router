import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./HomePage.css";
import img01 from "../../images/img01.jpg";
import img02 from "../../images/img02.jpg";
import img03 from "../../images/img03.jpg";

const HomePage = () => {
  return (
    <div>
      <div className=" carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows showThumbs={false}>
          <div>
            <img src={img01} alt="image1" />
          </div>
          <div>
            <img src={img02} alt="image2" />
          </div>
          <div>
            <img src={img03} alt="image3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
