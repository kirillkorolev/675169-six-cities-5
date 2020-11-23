import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
// import {Link} from "react-router-dom";

import {sortOffers} from "../../utils";

const OffersList = (props) => {

  const {offers, cardClass, setBrightPin, resetBrightPin, sortType} = props;

  let sortedOffers = sortOffers(sortType, offers);

  return (
    sortedOffers.map((card) => (
      <OfferCard key={card.id} card={card} cardClass={cardClass} setBrightPin={setBrightPin} resetBrightPin={resetBrightPin}/>
      // <Link to={`/offer/${card.id}`} key={card.id}>
      //   <OfferCard card={card} cardClass={cardClass} setBrightPin={setBrightPin} resetBrightPin={resetBrightPin}/>
      // </Link>
    ))
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  setBrightPin: PropTypes.func.isRequired,
  resetBrightPin: PropTypes.func.isRequired,

  sortType: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
};

export default OffersList;
