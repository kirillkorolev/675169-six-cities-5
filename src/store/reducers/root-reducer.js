import {combineReducers} from "redux";
import {process} from "./process/process";
import {offersData} from "./offers-data/offers-data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user,
});
