import './RocketCard.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReseve, reserveRocket } from '../../Redux/Rockets/rocketsReducer';

const RocketCard = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const {
    id, name, description, flickrImage, reserved,
  } = data;
  return (
    <div className="card">
      <img className="card-image" src={flickrImage} alt="" />
      <div className="card-dtls">
        <h2 className="card-title">{name}</h2>
        {reserved === true ? <span className="card-reserve">Reserved</span> : ''}
        <p className="card-dtls">{description}</p>
        {reserved === false ? <button className="card-btn-1" onClick={() => { dispatch(reserveRocket(id)); }} type="button">Reserve Rocket</button> : <button type="button" className="card-btn-2" onClick={() => { dispatch(cancelReseve(id)); }}>Cancel Reservation</button>}
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  data: PropTypes.node.isRequired,
};

export default RocketCard;
