import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";


const initialState = {
  city: `Paris`,
  shownOffers: [],
  offers,
};

// const getCurrentCityOffers = (array) => {
//   const items = array.filter((item) => item.cityName === initialState.city);
//   return items;
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CITY):

      return extend(state, {
        city: action.payload,
      });

    case (ActionType.SHOW_OFFERS):
      return extend(state, {
        shownOffers: action.payload
      });
  }

  return state;
};

export {reducer};
