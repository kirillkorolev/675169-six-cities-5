import {loadOffers, requireAuthorization, redirectToRoute} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";
import {transformOffer} from "../utils";

import {setInfo} from "../store/action";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(
        data.map((it) => transformOffer(it))
    )))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then((res) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setInfo(res.data));
    })
    .then(() => {
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
);
