import React from "react";
import PropTypes from "prop-types";

const FavoritesButton = (props) => {
  const {isFavorite, buttonDetails} = props;
  const {name, width, height} = buttonDetails;

  return (
    <button
      className={`${name}__bookmark-button ${isFavorite ? `${name}__bookmark-button--active` : ``} button`}

      type="button"
    >
      <svg
        className={`${name}__bookmark-icon`}
        width={`${width}`}
        height={`${height}`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoritesButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  buttonDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  })
};

export default FavoritesButton;
