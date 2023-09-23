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
import DetailModal from "./DetailModal";
import { Link } from "@mui/material";

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
          <strong>You clicked place</strong>
          <br />
          Place ID: {event.placeId}
          <br />
          Position: {event.latLng.lat()}, {event.latLng.lng()}
          <br />
          <button href="#" onClick={()=>openFormLayout({lat:event.latLng.lat(), lon:event.latLng.lng()})}>
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
              {/* <Marker
                position={{ lat: 49.284445661037054, lng: -123.1246298889249 }}
              >
                <InfoWindow>
                  <Link
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Report issue
                  </Link>
                </InfoWindow>
              </Marker> */}
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
