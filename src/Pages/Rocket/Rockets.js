import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from '../../Components/Rocket/RocketCard';
import { getAllRockets } from '../../Redux/Rockets/rocketsReducer';
import "../Rocket/Rockets.css"

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
  }, []);

  console.log(rocketsData);
  return (
    <div className='list'>
      <RocketCard key={1} image={"https://imgur.com/DaCfMsj.jpg"} name={"Rocket1"} description={"The Falcon 1 was an expendable launch system privately developed and"} id={1} reserved={false} />
      {/* {
        rocketsData.map((rocket) => (
          <RocketCard key={rocket.id} id={rocket.id} image={rocket.flickr_image} name={rocket.name} description={rocket.description} reserved={rocket.reserved} />
        ))
      } */}
    </div>
  );
};

export default Rockets;
