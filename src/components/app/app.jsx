import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";

import {connect} from "react-redux";
import {getOffers} from "../../store/reducers/offers-data/selectors";

import {getShownOffers} from "../../store/reducers/process/selectors";

const App = (props) => {

  const {offers, shownOffers} = props;


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          <AuthScreen />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesScreen />
        </Route>
        <Route
          path="/offer/:id?"
          exact
          render={({match}) => {
            const id = match.params.id;

            const offer = offers.find((offerItem) => offerItem.id === id);


            // const nearlyPlaces = offers.filter((item) => item.cityName === offer.cityName);

            return <OfferScreen offer={offer} nearlyPlaces={shownOffers}/>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  shownOffers: getShownOffers(state),
});

App.propTypes = {
  offers: PropTypes.array.isRequired,
  shownOffers: PropTypes.array.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
