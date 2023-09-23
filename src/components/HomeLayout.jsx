import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import { useMemo, useState } from "react";
import "../../src/App.css";
import OpenReportModal from "./OpenReportModal";
import { Link } from "@mui/material";

function HomeLayout({ data }) {
  const [activeMarker, setActiveMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAafj5ZO6dNK-OloRNXjot-Jk4TEgdKZLo",
  });
  const center = useMemo(() => ({ lat: 49.2827, lng: -123.1207 }), []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <>
      <div className="mapWrapperStyle">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <Wrapper libraries={["marker"]}>
            <GoogleMap
              mapContainerClassName="map-Container"
              center={center}
              zoom={13}
            >

              {data.map(
                (item) => (
                  
                  (
                    <Marker
                      key={item.id}
                      position={{ lat: item.lat, lng: item.lng }}
                      onClick={() => {
                        handleActiveMarker(item.id);
                      }}
                    >
                      {activeMarker === item.id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                         <DetailModal details={{item}} />   
                        </InfoWindow>
                      ) : null}
                    </Marker>
                  )
                )
              )}

              {/* <Marker position={center} /> */}
            </GoogleMap>
          </Wrapper>
        )}
      </div>
    </>
  );
}

export default HomeLayout;
