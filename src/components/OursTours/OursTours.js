import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { tours } from "../../tours";
import TourItem from "../TourItem/TourItem";
import "./OursTours.css";

const OursTours = ({ toursList, setToursList, setItemRemove }) => {
  return (
    <div>
      <div className="text-center">
        <Button variant="outline-warning" className="return-home my-3">
          <Link to="/">Return to page Home</Link>
        </Button>
      </div>
      <div className="row cntr-tours text-center py-3">
        <h3 className="title">Ours tours</h3>
        {toursList.length > 0 ? (
          toursList.map((value, i) => (
            <TourItem key={i} tour={value} setItemRemove={setItemRemove} />
          ))
        ) : (
          <Button
            variant="danger"
            style={{ width: "auto", margin: "0 auto" }}
            onClick={() => setToursList(tours)}
          >
            Refresh
          </Button>
        )}
      </div>
    </div>
  );
};

export default OursTours;
