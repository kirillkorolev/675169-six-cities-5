import React from "react";
import PropTypes from "prop-types";

const getUniqueCityNames = (arr) => {
  let uniqueNames = [];

  arr.forEach((elem) => {
    uniqueNames.push(elem.cityName);
  });
  return Array.from(new Set(uniqueNames));
};

const activeClass = `tabs__item--active`;

const CitiesList = (props) => {

  const {changeCity, offers, city} = props;
  const citiesNames = getUniqueCityNames(offers);

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
  offers: PropTypes.array.isRequired,
  changeCity: PropTypes.func.isRequired,

  city: PropTypes.string.isRequired,
};

export default CitiesList;
