import React from "react";
import PropTypes from "prop-types";

import {types} from "../../const";

const Sort = (props) => {
  const {sortType, sortOffers, isActive, onHandleClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0"

        onClick = {onHandleClick}

      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isActive === true ? `places__options--opened` : ``}`}
      >

        {Object.values(types).map((item, i) => (
          <li className={`places__option ${item === sortType ? `places__option--active` : ``}`} key={item + i} tabIndex="0"
            onClick = {() => {
              sortOffers(item);
              onHandleClick();
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  sortOffers: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default Sort;
