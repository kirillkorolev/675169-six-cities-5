import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";


const initialState = {
  currentCity: `Amsterdam`,
  shownOffers: [],
  offers,
  uniqueCities: [],
  sortType: `Popular`,
  hoveredId: `-1`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CITY):

      return extend(state, {
        currentCity: action.payload,
      });

    case (ActionType.SORT_OFFERS):

      return extend(state, {
        sortType: action.payload,
      });

    case (ActionType.SET_BRIGHT_PIN):

      return extend(state, {
        hoveredId: action.payload,
      });

    case (ActionType.RESET_BRIGHT_PIN):

      return extend(state, {
        hoveredId: action.payload,
      });
  }

  return state;
};

export {reducer};
