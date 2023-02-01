import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from './Rockets/rocketsReducer';
import missionsReducer from './Missons/missons';

const store = configureStore(
  {
    reducer: {
      rocketsData: rocketReducer,
      missionsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  },
);

export default store;
