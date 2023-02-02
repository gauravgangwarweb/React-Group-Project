import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const ADD_DATA = 'space-hub/rockets/ADD_DATA';
const RESERVE_ROCKET = 'space-hub/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'space-hub/rockets/CANCEL_RESERVATION';

const url = 'https://api.spacexdata.com/v3/rockets';

export const getAllRockets = createAsyncThunk(
  ADD_DATA,
  async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const rocketsArray = [];
    data.forEach((e) => {
      const rocket = {
        id: e.id,
        name: e.rocket_name,
        description: e.description,
        flickrImage: e.flickr_images[0],
        reserved: false,
      };
      rocketsArray.push(rocket);
    });
    return rocketsArray;
  },
);

export const reserveRocket = (rocketID) => ({
  type: RESERVE_ROCKET,
  rocketID,
});

export const cancelReseve = (rocketID) => ({
  type: CANCEL_RESERVATION,
  rocketID,
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_DATA}/fulfilled`:
      return [...state, ...action.payload];
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.rocketID) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.rocketID) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default rocketReducer;
