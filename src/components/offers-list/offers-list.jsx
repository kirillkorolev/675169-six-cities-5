import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

import {connect} from "react-redux";
import {setBrightPin, resetBrightPin} from "../../store/action";
import {getHoveredId} from "../../store/reducers/process/selectors";

import {sortOffers} from "../../utils";

const OffersList = (props) => {

  const {offers, cardClass, setBrightPinAction, resetBrightPinAction, sortType} = props;

  let sortedOffers = sortOffers(sortType, offers);

  return (
    sortedOffers.map((card) => (
      <OfferCard key={card.id} card={card} cardClass={cardClass} setBrightPin={setBrightPinAction} resetBrightPin={resetBrightPinAction}/>
    ))
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,

  setBrightPinAction: PropTypes.func.isRequired,
  resetBrightPinAction: PropTypes.func.isRequired,

  sortType: PropTypes.string,
  cardClass: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  hoveredId: getHoveredId(state),
});

const mapDispatchToProps = (dispatch) => ({
  setBrightPinAction(hoveredId) {
    dispatch(setBrightPin(hoveredId));
  },

  resetBrightPinAction() {
    dispatch(resetBrightPin());
  },
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
