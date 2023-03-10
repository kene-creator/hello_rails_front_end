import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import greetings from './greetings';

const rootReducer = {
  reducer: {
    greetings,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
