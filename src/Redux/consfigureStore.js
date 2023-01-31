import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketsReducer';

const store = configureStore(
  {
    reducer: {
      rocketsData: rocketReducer,
    },
  },
);

export default store;
