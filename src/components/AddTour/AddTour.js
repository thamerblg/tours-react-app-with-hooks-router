import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddTour({ AddNewTour }) {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTour = {
      id: Math.random(),
      name,
      info,
      image,
      price: +price,
    };
    AddNewTour(newTour);
    setName("");
    setInfo("");
    setImage("");
    setPrice("");
    alert("A new Tour has been added successfuly");
  };

  return (
    <div className="container px-5">
      <div className="text-center">
        <Button variant="outline-warning" className="return-home my-3">
          <Link to="/">Return to page Home</Link>
        </Button>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            <strong>Name</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <strong>Info</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Info"
            name="info"
            value={info}
            required
            onChange={(e) => setInfo(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <strong>Image</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Image"
            name="image"
            value={image}
            required
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <strong>Price</strong>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            name="price"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Add new Tour
        </Button>
      </Form>
    </div>
  );
}

export default AddTour;
