export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_BRIGHT_PIN: `SET_BRIGHT_PIN`,
  RESET_BRIGHT_PIN: `RESET_BRIGHT_PIN`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
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
  payload: `-1`,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});
