import React from "react";
import PropTypes from "prop-types";
import FavoritesItem from "../favorites-item/favorites-item";

const FavoritesList = (props) => {

  const {cityNames, offers} = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">

        {cityNames.map((item) => (
          <FavoritesItem
            key={item + Math.random()}
            cityName={item}
            offers={offers.filter((offer) => offer.cityName === item)}
          />
        ))}

      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired,
  cityNames: PropTypes.array.isRequired,
};

export default FavoritesList;
