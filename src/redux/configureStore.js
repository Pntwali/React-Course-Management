import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhacers =
    Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhacers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
