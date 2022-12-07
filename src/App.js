import { useState, useEffect } from 'react';
import StationCard from './components/StationCard/StationCard';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';


const App = () => {
  const [stations, setStations] = useState([]);
  const [filteredStations, setFilteredStations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://app-media.noloco.app/noloco/dublin-bikes-api.json');
      const stations = await res.json();
      setStations(stations);
      setFilteredStations(stations);
    }
    fetchData();
  }, []);

  const onSearchSubmit = (address) => {
    if (!address) return setFilteredStations(stations);

    const searchedStation = stations.filter(station => station.address === address.value);
    setFilteredStations(searchedStation);
  }

  const getSearchOptions = () => {
    return stations.map((station) => ({
      value: station.address, label: station.address
    }));
  }

  return (
    <div className="App">
      <SearchBox
        onSubmit={onSearchSubmit}
        options={getSearchOptions()}
      />

      <ul>
        {filteredStations.map((station) => (
          <li>
            <StationCard
              key={station.address}
              address={station.address}
              availableBikeStands={station.available_bike_stands}
              availableBikes={station.available_bikes}
              latitude={station.latitude}
              longitude={station.longitude}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
