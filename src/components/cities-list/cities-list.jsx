import React from "react";
import PropTypes from "prop-types";

const activeClass = `tabs__item--active`;

const CitiesList = (props) => {
  const {changeCity, citiesNames, city} = props;
  // const citiesNames = getUniqueCityNames(offers);

  return (
    citiesNames.map((item, i) => (

      <li className="locations__item" key={item + i} >
        <a className={`locations__item-link tabs__item  ${item === city ? activeClass : `` } ` } href="#"
          onClick = {(evt) => {
            evt.preventDefault();
            changeCity(item);
          }}>
          <span>{item}</span>
        </a>
      </li>
    ))
  );
};

CitiesList.propTypes = {
  citiesNames: PropTypes.array.isRequired,
  changeCity: PropTypes.func.isRequired,

  city: PropTypes.string.isRequired,
};

export default CitiesList;
