import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import OffersList from "../offers-list/offers-list";
import CitiesList from "../cities-list/cities-list";
import Map from "../map/map";
import Sort from "../sort/sort";
import Header from "../header/header";

import {ActionCreator} from "../../store/action";

import withAciveItem from "../../hocs/with-active-item/with-active-item";

import {citiesList} from "../../const";
import MainEmpty from "../main-empty/main-empty";

const placesClass = `cities__place-card`;

const SortWrapped = withAciveItem(Sort);

const MainPage = (props) => {

  const {
    currentCity,
    shownOffers,
    changeCity,
    sortType,
    sortOffers,
    setBrightPin,
    resetBrightPin,
    hoveredId,
  } = props;


  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={`page__main page__main--index ${shownOffers.length === 0 ? `page__main--index-empty` : `` }`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">

              <CitiesList citiesNames={citiesList} changeCity={changeCity} city={currentCity}/>

            </ul>

          </section>
        </div>
        <div className="cities">
          {shownOffers.length === 0 ?
            <MainEmpty currentCity={currentCity}/>
            :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>

                <b className="places__found">

                  {shownOffers.length} places to stay in {currentCity}

                </b>

                <SortWrapped sortType={sortType} sortOffers={sortOffers} />

                <div className="cities__places-list places__list tabs__content">

                  <OffersList offers={shownOffers} cardClass={placesClass} setBrightPin={setBrightPin} resetBrightPin={resetBrightPin}
                    sortType={sortType}
                  />

                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">

                  <Map offers={shownOffers} hoveredId={hoveredId}/>

                </section>
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  changeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  shownOffers: PropTypes.array.isRequired,

  sortType: PropTypes.string.isRequired,
  sortOffers: PropTypes.func.isRequired,

  hoveredId: PropTypes.string.isRequired,
  setBrightPin: PropTypes.func.isRequired,
  resetBrightPin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  shownOffers: state.offers.filter((it) => it.cityName === state.currentCity),
  offers: state.offers,
  sortType: state.sortType,
  hoveredId: state.hoveredId,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(currentCity) {
    dispatch(ActionCreator.changeCity(currentCity));
  },

  sortOffers(filter) {
    dispatch(ActionCreator.sortOffers(filter));
  },

  setBrightPin(hoveredId) {
    dispatch(ActionCreator.setBrightPin(hoveredId));
  },

  resetBrightPin() {
    dispatch(ActionCreator.resetBrightPin());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
