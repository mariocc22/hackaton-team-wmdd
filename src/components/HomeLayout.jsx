import React from "react";

import { GoogleMap, useLoadScript , withGoogleMap} from "@react-google-maps/api";
import { Marker } from "google-maps-react-markers";
import { useMemo } from "react";
import "../../src/App.css";

const HomeLayout = withGoogleMap(() => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAafj5ZO6dNK-OloRNXjot-Jk4TEgdKZLo",
  });
  const center = useMemo(() => ({ lat: 49.2827, lng: -123.1207 }), []);

  return (
    <>
      <div className="mapWrapperStyle">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-Container"
            center={center}
            zoom={13}
            onClick={(e) => {
              console.log(e);
            }}
          >
            
              <Marker  lat={49.2827}
            lng={-123.1207}
            />
            
          </GoogleMap>
        )}
      </div>
    </>
  );
})

export default HomeLayout;
