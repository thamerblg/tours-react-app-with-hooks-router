import React from "react";
import { Link } from "react-router-dom";
//import { tours } from "../../tours";
import "bootstrap/dist/css/bootstrap.min.css";

const TourDetails = ({ idTour, toursList }) => {
  //console.log(idTour);
  return (
    <div>
      <div className="text-center">
        <Link to={`/OursTours`}>
          <button className="btn btn-secondary my-2">
            Return to list of tours
          </button>
        </Link>
      </div>
      {toursList
        .filter(
          (tour) =>
            // eslint-disable-next-line
            tour.id == idTour
        )
        .map((selectedTour, i) => (
          <div key={i} className="col-md-8 mx-auto my-3">
            <div className="card mb-3">
              <img
                src={selectedTour.image}
                className="card-img-top"
                alt={selectedTour.name}
              />
              <div className="card-body">
                <h3 className="card-title text-center ">{selectedTour.name}</h3>
                <p className="card-text text-center">{selectedTour.info}</p>
                <span className="price">{selectedTour.price}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TourDetails;
