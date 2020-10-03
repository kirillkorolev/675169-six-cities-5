import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  PLACES_AMMOUNT: 312
};

ReactDOM.render(
    <App
      placesAmmount={Settings.PLACES_AMMOUNT}
    />,
    document.querySelector(`#root`)
);
