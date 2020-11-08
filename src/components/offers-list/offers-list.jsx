import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {Link} from "react-router-dom";

const OffersList = (props) => {
  const {offers, cardClass, setBrightPin, resetBrightPin} = props;

  return (
    offers.map((card) => (
      <Link to={`/offer/${card.id}`} key={card.id}>
        <OfferCard card={card} cardClass={cardClass} setBrightPin={setBrightPin} resetBrightPin={resetBrightPin}/>
      </Link>
    ))
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  setBrightPin: PropTypes.func.isRequired,
  resetBrightPin: PropTypes.func.isRequired,
};

export default OffersList;
