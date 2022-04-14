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
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Movies</Nav.Link>
          <Nav.Link href="">Series</Nav.Link>
          <AddCard addSerie={props.addSerie} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
