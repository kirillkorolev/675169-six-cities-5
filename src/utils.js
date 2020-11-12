import {types} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const sortOffers = (filter, offers) => {

  const sorteredOffers = offers.slice();

  switch (filter) {
    case types.POPULAR:
      break;
    case types.LOW_TO_HIGH:
      sorteredOffers.sort((a, b) => a.price - b.price);
      break;
    case types.HIGH_TO_LOW:
      sorteredOffers.sort((a, b) => b.price - a.price);
      break;
    case types.TOP_RATED:
      sorteredOffers.sort((a, b) => b.raiting - a.raiting);
      break;
  }

  return sorteredOffers;
};

