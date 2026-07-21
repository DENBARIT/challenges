import { useState } from "react";

import { useGeolocate } from "./useGetPosition";

export default function App() {

const {isLoading, position:{lat, lng}, getPosition, error} = useGeolocate();
    const [countClicks, setCountClicks] = useState(0);
  function handlePosition(){
    
        setCountClicks((count) => count + 1);
    getPosition();
    }

     
  return (
    <div>
      <button onClick={handlePosition} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
