
import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../../src/App.css";
import OpenReportModal from "./OpenReportModal";

function HomeLayout({data}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAafj5ZO6dNK-OloRNXjot-Jk4TEgdKZLo",
  });
  const center = useMemo(() => ({ lat: 49.2827, lng: -123.1207 }), []);

console.log(data)
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

                {
                    data.map((item,index) => (
                        <Marker key={index} position={{ lat: item.lat, lng: item.lng }} onClick={()=>{console.log(item.address)}} />
                    ))
                }
              {/* <Marker position={center} /> */}
            </GoogleMap>
          </Wrapper>
        )}
      </div>
    </>
  );
}

export default HomeLayout;
