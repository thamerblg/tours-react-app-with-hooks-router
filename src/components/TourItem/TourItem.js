import "./TourItem.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TourItem = ({
  tour: { id, name, info, image, price },
  setItemRemove,
}) => {
  const handleRemoveItem = (e) => {
    setItemRemove(e.target.getAttribute("name"));
  };

  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h3 className="card-title text-center ">{name}</h3>
          <p className="card-text text-center">
            <ReactReadMoreReadLess
              charLimit={250}
              readMoreText={"Read more"}
              readLessText={"Read less"}
            >
              {info}
            </ReactReadMoreReadLess>
          </p>
          <span className="price">{price}</span>
          <div className="text-center">
            <Button
              className="interseted-btn "
              size="sm"
              name={id}
              onClick={handleRemoveItem}
            >
              Not interseted
            </Button>
          </div>
          <div className="more-details text-center">
            <Link to={`/tourDetails/${id}`}>More details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
