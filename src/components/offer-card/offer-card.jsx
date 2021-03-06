import React from "react";
import PropTypes from "prop-types";

const OfferCard = (props) => {

  const {card, cardClass, setBrightPin, resetBrightPin} = props;
  const {id, image, premium, price, title, type, rating} = card;

  const name = cardClass + ` place-card`;

  return (
    <article className={`${name}`}
      onMouseEnter = {() => {
        setBrightPin(id);
      }}

      onMouseLeave = {() => {
        resetBrightPin();
      }}
    >
      {premium &&
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
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
    premium: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
  cardClass: PropTypes.string.isRequired,
  resetBrightPin: PropTypes.func.isRequired,
  setBrightPin: PropTypes.func.isRequired,
};

export default OfferCard;

