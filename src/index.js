// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/app/app";
// import offers from "./mocks/offers";

// ReactDOM.render(
//     <App
//       offers={offers}
//     />,
//     document.querySelector(`#root`)
// );


import React from "react";
import ReactDOM from "react-dom";

import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

import offers from "./mocks/offers";

import App from "./components/app/app";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
