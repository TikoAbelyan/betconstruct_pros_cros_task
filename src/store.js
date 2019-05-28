import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default createStore(
  combineReducers({
    rootReducer,
  }),
  applyMiddleware(logger, thunk)
);
