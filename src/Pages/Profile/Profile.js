import React from 'react';
import './profile.css';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const rocketsState = useSelector((state) => state.rocketsData);
  const joinedRockets = rocketsState.filter((rockets) => rockets.reserved === true);
  const joinedMissions = missionsState.filter(
    (missions) => missions.reserved === true,
  );

  return (
    <div className="profile-container">
      <h2 className="profile-heading">My Profile</h2>
      <div className="main-container">
        <div className="rockets-container">
          <h3>My Rockets</h3>
          <ul>
            {joinedRockets.map((rockets) => (
              <li className="container-span" key={rockets.id}>{rockets.name}</li>
            ))}
          </ul>
        </div>
        <div className="missions-container">
          <h3>My Missions</h3>
          <ul>
            {joinedMissions.map((mission) => (
              <li className="container-span" key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
