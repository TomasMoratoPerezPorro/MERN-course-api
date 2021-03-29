import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

/* 
  Thansk to redux-thunk we're able to dispatch more than one action from this 
  function and also use asyncronous fucntions.
*/

export const setAlert = (msg, alertType, tiemout = 5000) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  // First parameter is a funcion, second parameter is the time in miliseconds
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), tiemout);
};
