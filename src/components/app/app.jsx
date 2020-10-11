import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = (props) => {

  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage offers={offers} />
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
            const id = Number(match.params.id);
            const offer = offers.find((offerItem) => offerItem.id === id);

            return <OfferScreen offer={offer}/>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
