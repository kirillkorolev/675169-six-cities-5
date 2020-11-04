import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";


const initialState = {
  currentCity: `Amsterdam`,
  shownOffers: [],
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CITY):

      return extend(state, {
        currentCity: action.payload,
      });
  }

  return state;
};

export {reducer};
