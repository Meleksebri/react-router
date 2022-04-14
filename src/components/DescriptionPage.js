import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-stars";

const DescriptionPage = (props) => {
  const location = useLocation();
  const movie = props.Movies.find((el) => el.id === +location.state);

  return (
    <Card
      style={{ width: "800px", height: "500px", backgroundColor: "" }}
      className="text-center"
    >
      <Card.Img variant="top" />
      {movie.trailer}
      <Card.Body>
        <Card.Text
          style={{
            fontSize: " 20px",
            color: "white",
            textAlign: "center",
            fontFamily: "roboto",
          }}
        >
          {movie.description}
        </Card.Text>
        <br></br>
        <Link to="/">
          <Button
            variant="primary"
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            Go back home
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DescriptionPage;
