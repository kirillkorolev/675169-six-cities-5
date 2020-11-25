import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";

import {connect} from "react-redux";
import {getOffers} from "../../store/reducers/offers-data/selectors";

import PrivateRoute from "../private-route/private-route";

import {getShownOffers} from "../../store/reducers/process/selectors";

import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <MainPage />
        </Route>
        <Route
          exact
          path={AppRoute.LOGIN}
          render={({history}) => (
            <AuthScreen
              onSubmit={() => history.push(AppRoute.ROOT)}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesScreen/>
            );
          }}
        />
        <Route
          path="/offer/:id?"
          exact
          render={({match}) => {
            const id = Number(match.params.id);
            const offer = offers.find((offerItem) => offerItem.id === id);


            // const nearlyPlaces = offers.filter((item) => item.cityName === offer.cityName);

            return (
              <OfferScreen offer={offer} />
            );
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
