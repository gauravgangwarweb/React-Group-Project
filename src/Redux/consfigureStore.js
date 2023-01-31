import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketsReducer';
import missionsReducer from './Missons/missons';

const store = configureStore(
  {
    reducer: {
      rocketsData: rocketReducer,
      missionsReducer,
    },
  },
);

export default store;
