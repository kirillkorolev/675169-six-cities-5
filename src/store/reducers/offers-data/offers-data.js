import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  reviews: [],
};

const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

const reviewsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {offersData, reviewsData};
