export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,

  SET_BRIGHT_PIN: `SET_BRIGHT_PIN`,
  RESET_BRIGHT_PIN: `RESET_BRIGHT_PIN`,
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),

  sortOffers: (filter) => ({
    type: ActionType.SORT_OFFERS,
    payload: filter,
  }),

  setBrightPin: (id) => ({
    type: ActionType.SET_BRIGHT_PIN,
    payload: id,
  }),

  resetBrightPin: () => ({
    type: ActionType.RESET_BRIGHT_PIN,
    payload: `-1`,
  }),
};
