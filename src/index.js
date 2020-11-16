import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";

import {AuthorizationStatus} from "./const";

// import offers from "./mocks/offers";

import App from "./components/app/app";

import thunk from "redux-thunk";
import {createAPI} from "./services/api";

// import {ActionCreator} from "./store/action";
import {fetchHotelsList, checkAuth} from "./store/api-actions";


const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

console.log(store);

store.dispatch(fetchHotelsList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        // offers={offers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
