import React from "react";
import PropTypes from "prop-types";
import FavoritesPlace from "../favorites-place/favorites-place";

const FavoritesItem = (props) => {
  const {cityName, offers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <FavoritesPlace key={offer.id} offer={offer}/>
        ))}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default {FavoritesItem};
