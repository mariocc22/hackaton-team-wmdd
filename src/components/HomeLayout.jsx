import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../../src/App.css";
import OpenReportModal from "./OpenReportModal";

function HomeLayout() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAafj5ZO6dNK-OloRNXjot-Jk4TEgdKZLo",
  });
  const center = useMemo(() => ({ lat: 49.2827, lng: -123.1207 }), []);

  return (
    <>
      <h1>Home</h1>
      <OpenReportModal />
      <div className="mapWrapperStyle">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-Container"
            center={center}
            zoom={13}
            onClick={(e) => {
              console.log("this is the info!", e);
            }}
          />
        )}
      </div>
    </>
  );
}

export default HomeLayout;
