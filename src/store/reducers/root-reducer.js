import {combineReducers} from "redux";
import {process} from "./process/process";
import {offersData} from "./offers-data/offers-data";
import {reviewsData} from "./reviews-data/reviews-data";
import {nearbyData} from "./nearby-data/nearby-data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
  REVIEWS: `REVIEWS`,
  NEARBY: `NEARBY`,
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user,
  [NameSpace.REVIEWS]: reviewsData,
  [NameSpace.NEARBY]: nearbyData,
});
