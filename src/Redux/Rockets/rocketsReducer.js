import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const ADD_DATA = 'space-hub/rockets/ADD_DATA';

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

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_DATA}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default rocketReducer;
