import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

var composition;

// Check if in production
if (process.env.NODE_ENV === "production") {
  composition = compose(applyMiddleware(...middleware));
} else {
  composition = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = createStore(rootReducer, initialState, composition);

export default store;
