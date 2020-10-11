import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

// const Settings = {
//   PLACES_AMMOUNT: 312
// };

ReactDOM.render(
    <App
      // placesAmmount={Settings.PLACES_AMMOUNT}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
