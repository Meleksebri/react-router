import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import "./MovieCard.css";

export default function AddCard(props) {
  const [newSerie, setNewSerie] = useState({
    id: Math.random(),
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  const addNewSerie = (e) =>
    setNewSerie({ ...newSerie, [e.target.name]: e.target.value });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setShow(false);
    if (
      newSerie.title === "" ||
      newSerie.description === "" ||
      newSerie.posterURL === "" ||
      newSerie.rating === ""
    )
      return;
    props.addSerie(newSerie);
  };
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button
        style={{
          position: "absolute",
          right: "0px",
          marginRight: "10px",
          backgroundColor: "white",
          color: "black",
        }}
        variant="primary"
        onClick={handleShow}
      >
        Add A New Movie
      </Button>

      <Modal id="adds" show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Serie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="newSerie">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Serie title"
                name="title"
                onChange={addNewSerie}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Serie description"
                name="description"
                onChange={addNewSerie}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Serie posterURL "
                name="posterURL"
                onChange={addNewSerie}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Serie rating"
                name="rating"
                onChange={addNewSerie}
              />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
