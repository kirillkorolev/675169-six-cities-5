import React from "react";
import PropTypes from "prop-types";

import dateFormat from "dateformat";

const ReviewItem = (props) => {
  const {item} = props;
  const {photo, name, rating, text, date} = item;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`${photo}`} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time"
          dateTime={`${dateFormat(new Date(date), `yyyy-mm-dd`)}`}
        >
          {`${dateFormat(new Date(date), `mmmm yyyy`)}`}
        </time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};

export default ReviewItem;
