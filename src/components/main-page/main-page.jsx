import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import CitiesList from "../cities-list/cities-list";
import Map from "../map/map";
import Sort from "../sort/sort";

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import {filterOffers} from "../../utils";


const placesClass = `cities__place-card`;

const getUniqueCityNames = (arr) => {
  const uniqueNames = arr.map((item) => item.cityName);

  return Array.from(new Set(uniqueNames));
};

const MainPage = (props) => {

  const {
    currentCity,
    shownOffers,
    changeCity,
    uniqueCities,

    filter,
    sortOffers,
    filteredOffers,
  } = props;
  // console.log(props);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <ul className="locations__list tabs__list">

              <CitiesList citiesNames={uniqueCities} changeCity={changeCity} city={currentCity}/>

            </ul>

          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>

              <b className="places__found">

                {shownOffers.length} places to stay in {currentCity}

              </b>

              <Sort filter={filter} sortOffers={sortOffers}/>

              <div className="cities__places-list places__list tabs__content">

                <OffersList offers={filteredOffers} cardClass={placesClass}/>

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map offers={shownOffers}/>

              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  changeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  shownOffers: PropTypes.array.isRequired,

  uniqueCities: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  sortOffers: PropTypes.func.isRequired,

  filteredOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  shownOffers: state.offers.filter((it) => it.cityName === state.currentCity),
  offers: state.offers,
  uniqueCities: getUniqueCityNames(state.offers),
  filter: state.filter,

  filteredOffers: filterOffers(state.filter, state.shownOffers),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(currentCity) {
    dispatch(ActionCreator.changeCity(currentCity));
  },

  sortOffers(filter) {
    dispatch(ActionCreator.sortOffers(filter));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
