import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const OffersList = (props) => {
  const {offers} = props;

  return (
    offers.map((card) => (
      <OfferCard key={card.id} card={card}/>
    ))
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
