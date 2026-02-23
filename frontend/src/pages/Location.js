import './Location.css';
import React, { useState } from 'react';


function Location() {
  return (
    <div className="Location">
        <h1>Locations</h1>
        <img
        className="map-style"
        src="https://media.istockphoto.com/id/2190991193/vector/the-districts-of-chicago.jpg?s=612x612&w=0&k=20&c=23lDBO3EIiuMxYraxgaayHCRIIKdTZOsZyCiPJiLTf8="
        alt="Map of Major Chicago Areas"
        width="600"
        height="600"
      />
        <RegionDropDown />
    </div>
  );
}

// make this a dropdown for the areas
function RegionDropDown() {
  const [region, setArea] = useState("");

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  return (
    <div>
      <h2 className="dropDown-text">Select your region:</h2>

      <select value={region} onChange={handleChange} className="dropDown-box">
        <option value="">-- Choose an option --</option>
        <option value="Central">Central</option>
        <option value="Far North Side">Far North Side</option>
        <option value="Far Southeast Side">Far Southeast Side</option>
        <option value="Far Southwest Side">Far Southwest Side</option>
        <option value="North Side">North Side</option>
        <option value="Northwest Side">Northwest Side</option>
        <option value="South Side">South Side</option>
        <option value="Southwest Side">Southwest Side</option>
        <option value="West Side">West Side</option>
      </select>

      <p className="dropDown-text">Selected Region: {region}</p>
      <ClosestLocation region={region} />
    </div>
  );
}

// chooses the facility. spot is the number of the facility with 1 being northmost and 7 being southmost
function ClosestLocation({region}) {

    // finds spot
    let spot = 0;
    if(region === "Far North Side")
    {
      spot = "1";
    }
    else if(region === "North Side" || region === "Northwest Side")
    {
      spot = "2";
    }
    else if(region === "West Side" || region === "Central")
    {
      spot = "3, 4, or 5";
    }
    else if(region === "South Side" || region === "Southwest Side")
    {
      spot = "6 or 7";
    }
    else if(region === "Far Southwest Side" || region === "Far Southeast Side")
    {
      spot = "7";
    }

    //actually displays stuff
    if(spot === "1")
    {
      return(
        <div>
          <h2 className="spot-style">Nearest recycling center:</h2>
          <h2 className="spot-style">Far North Side, 6441 N Ravenswood Ave</h2>
        </div>
      )
    }
    else if(spot === "2")
    {
      return(
        <div>
          <h2 className="spot-style">Nearest recycling center:</h2>
          <h2 className="spot-style">Notebaert Nature Museum, 2430 N Cannon Dr</h2>
        </div>
      )
    }
    else if(spot === "3, 4, or 5")
    {
      return(
        <div>
          <h2 className="spot-style">Nearest recycling centers:</h2>
          <h2 className="spot-style">Household Chemicals and Computer Recycling Facility, 1150 N North Branch St</h2>
          <h2 className="spot-style">West Loop, 1519 W Warren Blvd</h2>
          <h2 className="spot-style">Near South, 1752 S Clark</h2>
        </div>
      )
    }
    else if(spot === "6 or 7")
    {
      return(
        <div>
          <h2 className="spot-style">Nearest recycling centers:</h2>
          <h2 className="spot-style">Old Attucks School, 3850 S State St</h2>
          <h2 className="spot-style">Washington Park, 5560 Russel Dr</h2>
        </div>
      )
    }
    else if(spot === "7")
    {
      return(
        <div>
          <h2 className="spot-style">Nearest recycling center:</h2>
          <h2 className="spot-style">Washington Park, 5560 Russel Dr</h2>
        </div>
      )
    }

    return null;
}

export default Location;