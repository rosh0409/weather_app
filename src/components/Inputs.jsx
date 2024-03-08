import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  let [search, setSearch] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.target.name;
    console.log(selectedUnit);
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(lat, lon);
        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for city....."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={40}
          onClick={() => {
            search !== "" ? setQuery({ q: search }) : (search = "");
          }}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={40}
          onClick={handleLocationClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          onClick={handleUnitsChange}
          className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-xl text-white mx-l px-1"> / </p>
        <button
          name="imperial"
          onClick={handleUnitsChange}
          className="text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
