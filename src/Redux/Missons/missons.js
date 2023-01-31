import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_MISSIONS = 'space-travellers-hub/missions/DISPLAY_MISSIONS';
const TOGGLE_JOIN_MISSION = 'space-travellers-hub/missions/TOGGLE_JOIN_MISSION';

const initialState = {
  missions: [],
};

const url = 'https://api.spacexdata.com/v3/missions';

const displayMissions = (missions) => ({
  type: DISPLAY_MISSIONS,
  payload: missions,
});

export const toggleJoinMissions = (id) => ({
  type: TOGGLE_JOIN_MISSION,
  payload: id,
});

// export const fetchMissions = () => async (dispatch) => {
//   const response = await fetch('https://api.spacexdata.com/v3/missions');
//   try {
//     const missions = await response.json();
//     dispatch(displayMissions(missions));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export const fetchMissions = createAsyncThunk(DISPLAY_MISSIONS, async () => {
  const response = await fetch(url);
  try {
    const missions = await response.json();
    dispatch(displayMissions(missions));
    return;
  } catch (err) {
    throw new Error(err);
  }
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MISSIONS:
      return {
        missions: action.payload,
      };
    case TOGGLE_JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, reserved: !mission.reserved };
          }
          return mission;
        }),
      };

    default:
      return state;
  }
};

export default missionsReducer;
