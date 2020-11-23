import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import OffersList from "../offers-list/offers-list";
import CitiesList from "../cities-list/cities-list";
import Map from "../map/map";
import Sort from "../sort/sort";
import Header from "../header/header";
import MainEmpty from "../main-empty/main-empty";

import {changeCity, sortOffers, setBrightPin, resetBrightPin} from "../../store/action";

import withAciveItem from "../../hocs/with-active-item/with-active-item";
import {citiesList} from "../../const";

import {getOffers} from "../../store/reducers/offers-data/selectors";
import {getCurrentCity, getSortType, getHoveredId, getShownOffers} from "../../store/reducers/process/selectors";

const placesClass = `cities__place-card`;

const SortWrapped = withAciveItem(Sort);

const MainPage = (props) => {

  const {
    currentCity,
    shownOffers,
    changeCityAction,
    sortType,
    sortOffersAction,
    setBrightPinAction,
    resetBrightPinAction,
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
              <CitiesList
                citiesNames={citiesList}
                changeCity={changeCityAction}
                city={currentCity}
              />
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
                <SortWrapped
                  sortType={sortType}
                  sortOffers={sortOffersAction}
                />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList
                    offers={shownOffers}
                    cardClass={placesClass}
                    setBrightPin={setBrightPinAction}
                    resetBrightPin={resetBrightPinAction}
                    sortType={sortType}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={shownOffers}
                    hoveredId={hoveredId}
                  />
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
  changeCityAction: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  shownOffers: PropTypes.array.isRequired,

  sortType: PropTypes.string.isRequired,
  sortOffersAction: PropTypes.func.isRequired,

  hoveredId: PropTypes.number.isRequired,
  setBrightPinAction: PropTypes.func.isRequired,
  resetBrightPinAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),

  currentCity: getCurrentCity(state),
  shownOffers: getShownOffers(state),

  sortType: getSortType(state),
  hoveredId: getHoveredId(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCityAction(currentCity) {
    dispatch(changeCity(currentCity));
  },

  sortOffersAction(filter) {
    dispatch(sortOffers(filter));
  },

  setBrightPinAction(hoveredId) {
    dispatch(setBrightPin(hoveredId));
  },

  resetBrightPinAction() {
    dispatch(resetBrightPin());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
