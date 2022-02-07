import React from "react";

export default function Main({ weather, location, onSearchButtonClick }) {
  console.log("weather Main", weather);
  console.log("location Main", location);

  return (
    <div className="main">
      <div className="temperature">
        {weather.temp_c}
        <sup>o</sup>C
      </div>
      {/* <div className="btn-search">
        <SearchTwoToneIcon fontSize="large" onClick={onSearchButtonClick} />
      </div> */}

      <div className="location-info">
        <div className="location">
          <div className="condition">{weather.condition.text}</div>

          <div className="location-title">
            {location.name}, {location.country}
          </div>
        </div>
        <div className="icon">
          <img src={weather.condition.icon} alt="Weather Icon" />
        </div>
      </div>
    </div>
  );
}
