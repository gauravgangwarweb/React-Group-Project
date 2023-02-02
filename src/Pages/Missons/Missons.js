import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, toggleJoinMissions } from '../../Redux/Missons/missons';
import styles from './missions.module.css';

let fetched = false;
const Missions = () => {
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchMissions());
      fetched = true;
    }
  }, [dispatch]);

  const clickHandler = (e) => {
    const buttonId = e.target.getAttribute('data-target');
    dispatch(toggleJoinMissions(buttonId));
  };

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missionsState.map(
          ({
            mission_name: missionName,
            mission_id: missionId,
            description,
            reserved,
          }) => (
            <tr key={missionId}>
              <td className={styles.missionName}>{missionName}</td>
              <td>{description}</td>
              <td className={styles.badge}>
                <p
                  className={
                    reserved ? styles.missionReserved : styles.notReserved
                  }
                >
                  {reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
                </p>
              </td>
              <td key={missionId} className={styles.badge}>
                <button
                  className={reserved ? styles.leave : styles.join}
                  data-target={missionId}
                  key={missionId}
                  type="button"
                  onClick={clickHandler}
                >
                  {reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Missions;
