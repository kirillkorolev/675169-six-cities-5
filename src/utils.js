import {types} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filterOffers = (filter, offers) => {
  console.log(offers);
  switch (filter) {
    case types.POPULAR:
      offers = offers;
      break;
    case types.LOW_TO_HIGH:
      offers = offers.slice().sort((a, b) => a.price - b.price);
      break;
    case types.HIGH_TO_LOW:
      offers = offers.slice().sort((a, b) => b.price - a.price);
      break;
    case types.TOP_RATED:
      offers = offers.slice().sort((a, b) => a.raiting - b.raiting);
      break;
  }

  return offers;
};

