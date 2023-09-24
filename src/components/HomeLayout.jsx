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
import DetailModal from "./DetailModal";

function HomeLayout({ data, openFormLayout }) {
  const [activeMarker, setActiveMarker] = useState(null);

  const [infoWindowContent, setInfoWindowContent] = useState(null);

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

  const handleMapClick = (event) => {
    console.log("map clicked!", event);
    if (event.placeId) {
      const content = (
        <div>
          <strong>Accessibility</strong>
          <ul>
            <li>Wheelchair accessible elevator</li>
            <li>Wheelchair accessible entrance</li>
            <li>Wheelchair accessible parking lot</li>
            <li>Wheelchair accessible restroom</li>
          </ul>
          <button
            href="#"
            onClick={() =>
              openFormLayout({
                lat: event.latLng.lat(),
                lon: event.latLng.lng(),
              })
            }
          >
            Report issue
          </button>
          <br />
        </div>
      );
      setInfoWindowContent(content);
    }
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
              onClick={handleMapClick}
            >
              {data.map((item) => (
                <Marker
                  key={item.id}
                  position={{ lat: item.lat, lng: item.lng }}
                  icon="../src/assets/chair.png"
                  onClick={() => {
                    handleActiveMarker(item.id);
                  }}
                >
                  {activeMarker === item.id ? (
                    <InfoWindow>
                      <DetailModal details={{ item }} />
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))}
              {infoWindowContent && (
                <InfoWindow position={center}>
                  <div>{infoWindowContent}</div>
                </InfoWindow>
              )}
            </GoogleMap>
          </Wrapper>
        )}
      </div>
    </>
  );
}

export default HomeLayout;
