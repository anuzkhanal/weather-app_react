import React, { useEffect, useState } from "react";

export default function Search({ active, selectedLocation }) {
  const [term, setTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (term !== "") {
      fetch(
        `http://api.weatherapi.com/v1/search.json?key=1a812f87d9f6450da87114251220702&q=${term}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data);
        });
    } else {
      setSuggestions([]);
    }
  }, [term]);

  return (
    <div className={`search-bar ${active ? "active" : ""}`}>
      <input
        type="text"
        className="search-input"
        placeholder="Search your location"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          <ul>
            {suggestions.map((s) => (
              <Suggestions
                key={s.id}
                id={s.id}
                region={s.region}
                title={s.name}
                onRegionClick={() => {
                  selectedLocation(s.lat, s.lon);
                  setSuggestions([]);
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Suggestions({ id, title, region, onRegionClick }) {
  return (
    <li>
      <button onClick={onRegionClick}>
        {title},<small>{region}</small>
      </button>
    </li>
  );
}
