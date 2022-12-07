import './StationCard.css';


const StationCard = (props) => {
  const { address, availableBikeStands, availableBikes, latitude, longitude } = props;

  return (
    <div className="station-card">
      <div className="station-details">
        <h2>{address}</h2>
        <p>Available Bike Stands: {availableBikeStands}</p>
        <p>Available Bikes: {availableBikes}</p>
      </div>
      <button>Open in Maps</button>
    </div>
  );
}

export default StationCard;
