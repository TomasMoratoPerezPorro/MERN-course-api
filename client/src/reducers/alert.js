import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [
  /* {
        id: 1,
        msg: 'Please log in',
        alertType: 'success'
    } */
];

export default function (state = initialState, action) {
  const { type, payload } = action; //action.type - action.payload

  switch (type) {
    case SET_ALERT:
        // add a new alert to the state array
      return [...state, payload];
    case REMOVE_ALERT:
        // returns all alerts except the one that matches the payload 
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
