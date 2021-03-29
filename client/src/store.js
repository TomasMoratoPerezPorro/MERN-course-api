import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

/* 
    The store of the app acts as a single source of truth for the app state
    and stores the state which will be allways in sync with reducers.

    First argument of createStore is a reducer:
        - in this case we use combine reducers to provide a single reducer that combines all our reducers into a single reducing fuction

    Second argument is initial state:
        - Which will be always returned as the state if we don't update it performing an action.

*/

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
