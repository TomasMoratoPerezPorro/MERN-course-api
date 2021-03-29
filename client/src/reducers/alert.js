import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

/* 
    Redux Redeucer is to redux what the cashier is to the bank
      - Acts as an intermediator between the actions and the store state.
      - It is in sync with the store
      - To change the app state we dispatch actions to the reducer.
      - Then the reducer perform this actions and will return the new state.
    
    The reducing function takes in two parameters:
      - The State
      - An action (Composed by a type and a payload)

*/

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
