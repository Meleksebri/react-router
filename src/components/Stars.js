import React from "react";
import StarRatingComponent from "react-star-rating-component";

class Stars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
    this.props.search2(nextValue);
  }

  render() {
    const { rating } = this.state;

    return (
      <div className="stars">
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default Stars;
