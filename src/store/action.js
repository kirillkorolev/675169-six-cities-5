export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_BRIGHT_PIN: `SET_BRIGHT_PIN`,
  RESET_BRIGHT_PIN: `RESET_BRIGHT_PIN`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,

  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_INFO: `SET_INFO`,

  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEARBY: `LOAD_NEARBY`,
  SET_NEW_REVIEW: `SET_NEW_REVIEW`,
  LOAD_FAVORITE: `LOAD_FAVORITE`,

  TOGGLE_FAV_OFFER: `TOGGLE_FAV_OFFER`,
};

export const changeCity = (cityName) => ({
  type: ActionType.CHANGE_CITY,
  payload: cityName,
});

export const sortOffers = (sortType) => ({
  type: ActionType.SORT_OFFERS,
  payload: sortType,
});

export const setBrightPin = (id) => ({
  type: ActionType.SET_BRIGHT_PIN,
  payload: id,
});

export const resetBrightPin = () => ({
  type: ActionType.RESET_BRIGHT_PIN,
  payload: -1,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setInfo = (info) => ({
  type: ActionType.SET_INFO,
  payload: info,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const loadNearby = (nearby) => ({
  type: ActionType.LOAD_NEARBY,
  payload: nearby,
});

export const setNewReview = (data) => ({
  type: ActionType.SET_NEW_REVIEW,
  payload: data,
});

export const loadFavorite = (data) => ({
  type: ActionType.LOAD_FAVORITE,
  payload: data,
});

export const toggleFavOffer = (data) => ({
  type: ActionType.TOGGLE_FAV_OFFER,
  payload: data,
});
