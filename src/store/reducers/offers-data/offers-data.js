import {extend} from "../../../utils";
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
  }

  switch (action.type) {
    case ActionType.LOAD_NEARBY:
      return extend(state, {
        nearby: action.payload,
      });
  }

  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  switch (action.type) {
    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favorite: action.payload,
      });
  }

  return state;
};

export {offersData};
