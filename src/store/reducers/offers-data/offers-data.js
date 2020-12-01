import {extend, replaceItem} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  nearby: [],
  reviews: [],
  currentOffer: {},
  favorite: [],
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

    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favorite: action.payload,
      });

    case ActionType.SET_NEW_REVIEW:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.TOGGLE_FAV_OFFER:
      return extend(state, {
        offers: replaceItem(state.offers, action.payload.id, action.payload),
        nearOffers: replaceItem(state.nearby, action.payload.id, action.payload),
        favorite: replaceItem(state.favorite, action.payload.id, action.payload),
      });
  }

  return state;
};

export {offersData};
