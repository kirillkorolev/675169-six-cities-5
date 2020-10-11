import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    reviews.map((item) => (
      <ReviewItem key={item.id} item={item}/>
    ))
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;

