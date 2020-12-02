import {extend, replaceItem} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  nearby: [],
  reviews: [],
  currentOffer: {},
  favorites: [],
};

const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.LOAD_NEARBY:
      return extend(state, {
        nearby: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });

    case ActionType.SET_NEW_REVIEW:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.TOGGLE_FAV_OFFER:
      return extend(state, {
        offers: replaceItem(state.offers, action.payload.id, action.payload),
        nearOffers: replaceItem(state.nearby, action.payload.id, action.payload),
        favorites: Array.from(new Set(replaceItem(state.favorites, action.payload.id, action.payload))),
      });
  }

  return state;
};

export {offersData};
