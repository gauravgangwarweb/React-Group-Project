import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from './Rockets/rocketsReducer';

const store = configureStore(
  {
    reducer: {
      rocketsData: rocketReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  },
);

export default store;
