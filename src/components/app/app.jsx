import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = (props) => {
// const App = () => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {/* <MainPage offers={offers}/> */}

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
            const id = Number(match.params.id);
            const offer = offers.find((offerItem) => offerItem.id === id);

            const nearlyPlaces = offers.filter((item) => item.id !== id);

            return <OfferScreen offer={offer} nearlyPlaces={nearlyPlaces}/>;
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
