import {loadOffers, requireAuthorization, redirectToRoute, loadReviews, loadNearby} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";
import {transformOffer, transformReview} from "../utils";

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

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(
          data.map((it) => transformReview(it))
      ));
    })
);

export const fetchNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadNearby(
        data.map((it) => transformOffer(it))
    )))
);
