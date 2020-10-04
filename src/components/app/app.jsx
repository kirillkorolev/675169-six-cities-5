import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = (props) => {

  const {placesAmmount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage placesAmmount={placesAmmount} />
        </Route>
        <Route path="/login" exact>
          <AuthScreen />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesScreen />
        </Route>
        <Route path="/offer/:id?" exact component={OfferScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesAmmount: PropTypes.number.isRequired,
};

export default App;
