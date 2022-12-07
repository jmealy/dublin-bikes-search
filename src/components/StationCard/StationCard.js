import config from '../../config';
import './StationCard.css';


const StationCard = (props) => {
  const {
    address,
    availableBikeStands,
    availableBikes,
    latitude,
    longitude,
  } = props;

  const googleMapsLinkUrl = `${config.googleMapsBaseUrl}&query=${latitude},${longitude}`
  return (
    <div className="station-card">
      <div className="station-details">
        <h2>{address}</h2>
        <p>Available Bike Stands: {availableBikeStands}</p>
        <p>Available Bikes: {availableBikes}</p>
      </div>
      <a href={googleMapsLinkUrl} target="_blank" rel="noreferrer">Open in Maps</a>
    </div>
  );
}

export default StationCard;
