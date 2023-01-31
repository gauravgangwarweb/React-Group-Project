import './RocketCard.css';

const RocketCard = (props) => {
  const {
    id, image, name, description, reserved,
  } = props;
  return (
    <div className="card" key={id}>
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div>
        <div />
        <h2>{name}</h2>
        <p>{description}</p>
        <button>Reserve Rocket</button>
      </div>
    </div>
  );
};

export default RocketCard;
