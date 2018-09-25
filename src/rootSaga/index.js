import { all } from "redux-saga/effects";
import { getCustomerWatcher } from "./customer.saga";
export default function* rootSaga() {
  yield all([getCustomerWatcher()]);
}
