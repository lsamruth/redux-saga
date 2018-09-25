import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import rootSaga from "../rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
