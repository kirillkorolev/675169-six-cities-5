import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item";
import {sortByDate} from "../../utils";

const ReviewsList = (props) => {
  const {reviews} = props;

  const sortedReviews = sortByDate(reviews);

  return (
    sortedReviews.map((item) => (
      <ReviewItem key={item.id} item={item}/>
    ))
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;

