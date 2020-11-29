import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FavoritesButton from "../favorites-button/favorites-button";

const OfferCard = (props) => {
  const {card, cardClass, setBrightPin, resetBrightPin} = props;
  const {id, image, isPremium, price, title, type, rating, isFavorite} = card;

  const name = cardClass + ` place-card`;

  const buttonDetails = {
    name: `place-card`,
    width: 18,
    height: 19,
  };

  return (
    <article className={`${name}`}
      onMouseEnter = {() => {
        setBrightPin(id);
      }}

      onMouseLeave = {() => {
        resetBrightPin();
      }}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <FavoritesButton isFavorite={isFavorite} buttonDetails={buttonDetails}/>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  cardClass: PropTypes.string.isRequired,
  resetBrightPin: PropTypes.func.isRequired,
  setBrightPin: PropTypes.func.isRequired,
};

export default OfferCard;
