export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SHOW_OFFERS: `SHOW_OFFERS`,
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),

  showOffers: (offers, cityName) => ({
    type: ActionType.SHOW_OFFERS,
    payload: offers.filter((item) => item.cityName === cityName),
  }),
};
