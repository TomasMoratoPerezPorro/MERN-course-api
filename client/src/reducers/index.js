import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';

/* 
    We use combineReducers to split the reducing function into separate functions,
    each managing independent parts of the state.
        - We can work with different reducing functions and make our code cleaner. 
        - We pass a single reducing function to the store.
*/

export default combineReducers({
  alert,
  auth,
  profile,
});
