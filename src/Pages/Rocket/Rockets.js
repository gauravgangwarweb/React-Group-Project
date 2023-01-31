import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from '../../Components/Rocket/RocketCard';
import { getAllRockets } from '../../Redux/Rockets/rocketsReducer';
import './Rockets.css';

const Rockets = () => {
  const rocketsData = useSelector((state) => state.rocketsData);
  const dispatch = useDispatch();
  const fetchRockets = () => {
    if (rocketsData.length === 0) {
      dispatch(getAllRockets());
    }
  };

  useEffect(() => {
    fetchRockets();
  });

  return (
    <div className="list">
      {
        rocketsData.map((rocket) => (
          <RocketCard key={rocket.id} id={rocket.id} data={rocket} />
        ))
      }
    </div>
  );
};

export default Rockets;
