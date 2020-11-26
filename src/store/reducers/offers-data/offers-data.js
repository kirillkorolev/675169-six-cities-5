import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  nearby: [],
  reviews: [],
  currentOffer: {},
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
    case ActionType.LOAD_CURRENT_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });
  }

  return state;
};

export {offersData};
