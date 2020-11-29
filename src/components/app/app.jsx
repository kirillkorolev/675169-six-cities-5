import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import NotFound from "../not-found/not-found";
import Loading from "../loading/loading";
import PrivateRoute from "../private-route/private-route";

import {getOffers} from "../../store/reducers/offers-data/selectors";

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
          render={() => (<FavoritesScreen />)}
        />
        <Route
          path="/offer/:id?"
          exact

          render={({match}) => {

            const id = Number(match.params.id);
            const offer = offers.find((offerItem) => offerItem.id === id);

            if (offer) {
              return offers.length ? <OfferScreen id={id} currentOffer={offer}/> : <Loading/>;
            } else {
              return <NotFound />;
            }
          }}
        />
        <Route>
          <NotFound/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
