import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  reviews: [],
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

export {reviewsData};
