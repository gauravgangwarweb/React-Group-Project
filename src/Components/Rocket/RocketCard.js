import './RocketCard.css';
import PropTypes from 'prop-types';

const RocketCard = (props) => {
  const { data } = props;
  const {
    id, name, description, flickrImage,
  } = data;
  return (
    <div className="card">
      <img className="card-image" src={flickrImage} alt="" />
      <div className="card-dtls">
        <div />
        <h2 className="card-title">{name}</h2>
        <p className="card-dtls">{description}</p>
        <button id={id} type="button" className="card-btns">Reserve Rocket</button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  data: PropTypes.node.isRequired,
};

export default RocketCard;
