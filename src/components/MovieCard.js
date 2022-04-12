import React from "react";

const MovieCard = (props) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossOrigin="anonymous"
      />
      <div className="card">
        <a href="#">
          <div
            className="img1"
            style={{ backgroundImage: `url(${props.Movies.posterURL})` }}
          />
          <div
            className="img2"
            style={{ backgroundImage: `url(${props.Movies.posterURL})` }}
          />
          {/* <div className="title">{props.Movies.title}</div> */}
          <div className="text">{props.Movies.description}</div>
        </a>
        <a href="#">
          <div className="catagory">
            Rating <i className="fas fa-film" />
          </div>
        </a>
        <a href="#">
          <div className="views">
            {props.Movies.rating}
            <i className="bi bi-star-fill" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
