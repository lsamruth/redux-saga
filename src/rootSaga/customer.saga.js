import { takeEvery, call, put } from "redux-saga/effects";
import { GET_DATA, FETCHED_DATA } from "../actions";

//worker
function* getCustomerWorker() {
  const response = yield call(
    fetch,
    "https://www.w3schools.com/angular/customers.php"
  );
  const responseBody = yield response.json();
  //const responseBody = yield call([response, 'json']); //another way to parse json
  yield put({ type: FETCHED_DATA, payload: responseBody.records });
}

//wather
export function* getCustomerWatcher() {
  yield takeEvery(GET_DATA, getCustomerWorker);
}
