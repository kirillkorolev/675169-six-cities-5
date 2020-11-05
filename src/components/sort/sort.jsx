import React from "react";
import PropTypes from "prop-types";

import {types} from "../../const";

const Sort = (props) => {
  const {sortOffers, filter} = props;
  return (
    Object.values(types).map((item, i) => (
      <li className={`places__option ${item === filter ? `places__option--active` : ``}`} key={item + i} tabIndex="0"
        onClick = {() => {
          sortOffers(item);
        }}
      >
        {item}
      </li>
    ))
  );
};

Sort.propTypes = {
  sortOffers: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Sort;
