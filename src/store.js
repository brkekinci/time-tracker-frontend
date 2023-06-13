import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user.reducer';

const rootReducer = combineReducers({
  // Add your individual reducers here
  userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
