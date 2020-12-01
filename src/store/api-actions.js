import {loadOffers, requireAuthorization, redirectToRoute, loadReviews, loadNearby, setInfo, setNewReview, toggleFavOffer} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";
import {transformOffer, transformReview, transformToReview} from "../utils";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(
        data.map((it) => transformOffer(it))
    )))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
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

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {

      dispatch(loadNearby(
          data.map((it) => transformOffer(it))
      ));
    })
);

export const postReview = ({review: comment, rating}, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(setNewReview(
          data.map((it) => transformToReview(it))
      ));
    })
    .catch((err) => {
      throw err;
    })
);

export const postToFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      dispatch(toggleFavOffer(transformOffer(data)));
    })
    .catch((err) => {
      throw err;
    })
);
