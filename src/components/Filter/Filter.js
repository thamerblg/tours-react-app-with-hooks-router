import { Form, FormControl } from "react-bootstrap";

const Filter = ({ setNameSearch }) => {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <span className="">Search city by name</span>
      <Form className="col-md-2 px-2">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          onChange={(e) => {
            setNameSearch(e.target.value);
          }}
        />
      </Form>
    </div>
  );
};

export default Filter;
