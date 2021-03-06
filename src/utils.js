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
      sorteredOffers.sort((a, b) => b.rating - a.rating);
      break;
  }

  return sorteredOffers;
};

export const transformOffer = (offer) => {
  return {
    bedroomsAmmount: offer[`bedrooms`],
    premium: offer[`is_premium`],
    rating: offer[`rating`],
    guestsAmmount: offer[`max_adults`],
    price: offer[`price`],
    title: offer[`title`],
    type: offer[`type`],
    id: offer[`id`],
    image: offer[`preview_image`],


    ownerName: offer[`host`][`name`],
    ownerId: offer[`host`][`id`],
    ownerStatus: offer[`host`][`is_pro`],
    ownerPhoto: offer[`host`][`avatar_url`],

    cityLatitude: offer[`city`][`location`][`latitude`],
    cityLongitude: offer[`city`][`location`][`longitude`],
    cityZoom: offer[`city`][`location`][`zoom`],
    cityName: offer[`city`][`name`],

    goods: offer[`goods`],
    photos: offer[`images`],
    description: offer[`description`],

    offerLatitude: offer[`location`][`latitude`],
    offerLongitude: offer[`location`][`longitude`],
    offerZoom: offer[`location`][`zoom`],
  };
};
