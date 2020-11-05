export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SHOW_OFFERS: `SHOW_OFFERS`,

  SORT_OFFERS: `SORT_OFFERS`,
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),

  sortOffers: (filter) => ({
    type: ActionType.SORT_OFFERS,
    payload: filter,
  })
};
