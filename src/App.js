import { useState, useEffect } from 'react';
import StationCard from './components/StationCard/StationCard';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';


const App = () => {
  const [stations, setStations] = useState([]);
  const [filteredStations, setFilteredStations] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');

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

    setSelectedAddress(address);
    const searchedStation = stations.filter((station) => {
      if (station.address === address.value) {
        console.log(station.address, address.value);
      }
      return station.address === address.value
    });
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
        selectedOption={selectedAddress}
      />

      {filteredStations.map((station) => (
        <StationCard
          key={station.address}
          station={station}
        />
      ))}
    </div>
  );
}

export default App;
