import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {Link} from "react-router-dom";

const OffersList = (props) => {
  const {offers} = props;

  return (
    offers.map((card) => (
      <Link to={`/offer/${card.id}`} key={card.id}>
        <OfferCard card={card}/>
      </Link>
    ))
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
