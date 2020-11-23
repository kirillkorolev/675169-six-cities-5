import {createSelector} from "reselect";

import {getOffers, getReviews} from "../../../store/reducers/offers-data/selectors";
// import {citiesList} from "../../../const";

const getCurrentCity = (state) => state.PROCESS.currentCity;
const getSortType = (state) => state.PROCESS.sortType;
const getHoveredId = (state) => state.PROCESS.hoveredId;

const getShownOffers = createSelector(
    [getOffers, getCurrentCity],
    (offers, currentCity) => {
      return offers.filter((it) => it.cityName === currentCity);
    }
);

const getShownReviews = createSelector(
    [getReviews, getCurrentCity],
    (reviews, id) => {
      return reviews.filter((it) => it.id === id);
    }
);

export {getCurrentCity, getSortType, getHoveredId, getShownOffers, getShownReviews};
