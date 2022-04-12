import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddCard from "./AddCard";
import "./MovieCard.css";

const Header = (props) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontFamily: "Grape Nuts", fontSize: "26px" }}
        >
          Watchflix
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">Series</Nav.Link>
          <AddCard addSerie={props.addSerie} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
