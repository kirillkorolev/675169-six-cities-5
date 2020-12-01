import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {postToFavorite} from "../../store/api-actions";

const FavoritesButton = (props) => {
  const {isFavorite, buttonDetails, id, toggleFavorite} = props;
  const {name, width, height} = buttonDetails;

  return (
    <button
      className={`${name}__bookmark-button ${isFavorite ? `${name}__bookmark-button--active` : ``} button`}

      type="button"
      onClick={() => {
        toggleFavorite(id, isFavorite ? 0 : 1);
      }}
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
  id: PropTypes.number.isRequired,

  buttonDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),


  toggleFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite(id, status) {
    dispatch(postToFavorite(id, status));
  }
});

export {FavoritesButton};
export default connect(null, mapDispatchToProps)(FavoritesButton);

