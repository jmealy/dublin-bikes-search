import './StationCard.css';


const StationCard = (props) => {
  const {
    address,
    availableBikeStands,
    availableBikes,
    latitude,
    longitude } = props;
    
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  console.log('!!!!!', googleMapUrl);
  return (
    <div className="station-card">
      <div className="station-details">
        <h2>{address}</h2>
        <p>Available Bike Stands: {availableBikeStands}</p>
        <p>Available Bikes: {availableBikes}</p>
      </div>
      <a href={googleMapUrl} target="_blank">Open in Maps</a>
    </div>
  );
}

export default StationCard;
