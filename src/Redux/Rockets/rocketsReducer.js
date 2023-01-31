import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const FETCH_ROCKETS = 'space-hub/rockets/FETCH_ROCKETS';
const ADD_DATA = 'space-hub/rockets/ADD_DATA';

const url = 'https://api.spacexdata.com/v3/rockets';

export const addRocket = (payload) => (
  {
    type: ADD_DATA,
    payload,
  }
);

export const getAllRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (get, { dispatch }) => {
    const resp = await fetch(url);
    const data = await resp.json();
    const rocketsArray = [];
    data.forEach((e) => {
      const rocket = {
        id: e.id,
        name: e.rocket_name,
        description: e.description,
        flickr_image: e.flickr_images[0],
        reserved: false,
      };
      rocketsArray.push(rocket);
    });
    dispatch(addRocket(rocketsArray));
  },
);

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default rocketReducer;
