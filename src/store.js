import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user.reducer';
import authReducer from './reducers/auth.reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  // Add your individual reducers here
  userReducer,
  authReducer,
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
