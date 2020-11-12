import React from "react";
import ReviewForm from "../review-form/review-form";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import OffersList from "../offers-list/offers-list";
import Header from "../header/header";

import withReviewForm from "../../hocs/with-review-form/with-review-form";

const placesClass = `near-places__card`;

const ReviewFormWrapped = withReviewForm(ReviewForm);

const OfferScreen = (props) => {

  const {offer, nearlyPlaces} = props;
  const {premium, price, title, type, raiting, bedroomsAmmount, ownerName, ownerPhoto, goods, guestsAmmount, photos, reviews} = offer;


  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {photos.map((photo, i) => (
                <div className="property__image-wrapper" key={`${i}-${photo}`}>
                  <img className="property__image" src={`../${photo}`} alt="Photo studio"/>
                </div>
              ))}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : <div></div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${raiting * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{raiting}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsAmmount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {guestsAmmount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {goods.map((item, i) => (
                    <li className="property__inside-item" key={`${i}-${item}`}>
                      {item}
                    </li>
                  ))}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={`${ownerPhoto}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {ownerName}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">

                  <ReviewsList reviews={offer.reviews}/>

                </ul>

                <ReviewFormWrapped />

              </section>
            </div>
          </div>
          <section className="property__map map">

            <Map offers={nearlyPlaces}/>

          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <OffersList offers={nearlyPlaces} cardClass={placesClass}/>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  offer: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    raiting: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
    bedroomsAmmount: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    ownerName: PropTypes.string.isRequired,
    ownerPhoto: PropTypes.string.isRequired,
    guestsAmmount: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
  }),
  nearlyPlaces: PropTypes.array.isRequired
};

export default OfferScreen;
