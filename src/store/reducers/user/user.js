import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,

  info: {
    email: `email@mail.ru`,
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_INFO:
      return Object.assign({}, state, {
        info: action.payload,
      });
  }

  return state;
};

export {user};
