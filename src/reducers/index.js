import {createStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer as routing } from 'react-router-redux'
import thunk from "redux-thunk";
import * as API from 'api';

let rootReducer = combineReducers(
  {
    routing,
    // ...API.Categories.reducers,
    // ...API.Users.reducers
  }
);

const store = createStore(rootReducer, applyMiddleware(thunk));

export {store, rootReducer};
