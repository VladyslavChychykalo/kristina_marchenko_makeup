import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

const Map = () => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 50.424655, lng: 30.534771 }}
  >
    <Marker position={{ lat: 50.424655, lng: 30.534771 }} />
  </GoogleMap>
);

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
