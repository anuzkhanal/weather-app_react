import { useEffect, useState } from "react";
import "./App.css";

import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  const [weather, setWeather] = useState(false);
  const [location, setlocation] = useState(false);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchedLocation, setSearchedLocation] = useState([]);

  useEffect(() => {
    let url = `http://api.weatherapi.com/v1/current.json?key=1a812f87d9f6450da87114251220702&q=`;
    url = `${url}${
      searchedLocation.length > 0 ? searchedLocation.join(",") : "Paris"
    }`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log("json data", data);
        setWeather(data.current);
        setlocation(data.location);
      });
  }, [searchedLocation]);

  return (
    <div className="App">
      <Search
        active={searchBarActive}
        selectedLocation={(lat, lon) => {
          setSearchedLocation([lat, lon]);
        }}
      />
      <div className="app-inner">
        {weather ? (
          <Main
            weather={weather}
            location={location}
            onSearchButtonClick={() => {
              setSearchBarActive(true);
            }}
          />
        ) : (
          "Loading....."
        )}
      </div>
    </div>
  );
}

export default App;
