import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import OursTours from "./components/OursTours/OursTours";
import AddTour from "./components/AddTour/AddTour";
import { tours } from "./tours";
import { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import TourDetails from "./components/TourDetails/TourDetails";

function App() {
  const [toursList, setToursList] = useState(tours);
  const [nameSearch, setNameSearch] = useState("");
  const [itemRemove, setItemRemove] = useState("");

  const filterToursByNme = () => {
    setToursList(
      tours.filter((tour) =>
        tour.name.toLowerCase().startsWith(nameSearch.toLowerCase().trim())
      )
    );
  };
  const removeItem = () => {
    let copyofToursList = [...toursList];
    // eslint-disable-next-line
    setToursList(copyofToursList.filter((tour) => tour.id != itemRemove));
  };

  const AddNewTour = (newTour) => {
    tours.push(newTour);
    setToursList([...toursList, newTour]);
  };

  useEffect(() => {
    removeItem();
    // eslint-disable-next-line
  }, [itemRemove]);
  useEffect(() => {
    filterToursByNme();
    // eslint-disable-next-line
  }, [nameSearch]);

  return (
    <BrowserRouter>
      <div className="App container">
        <NavBar />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/OursTours" exact>
            <Filter setNameSearch={setNameSearch} />
            <OursTours
              toursList={toursList}
              setToursList={setToursList}
              setItemRemove={setItemRemove}
            />
          </Route>
          <Route path="/AddTour" exact>
            <AddTour AddNewTour={AddNewTour} />
          </Route>
          <Route
            path="/tourDetails/:id"
            render={(props) => (
              <TourDetails
                idTour={props.match.params.id}
                toursList={toursList}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
