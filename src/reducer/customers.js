import { FETCHED_DATA } from "../actions";

const initialState = {
  customers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHED_DATA:
      return { ...state, customers: action.payload };
    default:
      return state;
  }
}
