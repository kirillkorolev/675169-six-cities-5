import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

const App = (props) => {

  const {placesAmmount} = props;

  return (
    <MainPage placesAmmount={placesAmmount} />
  );
};

App.propTypes = {
  placesAmmount: PropTypes.number.isRequired,
};

export default App;
