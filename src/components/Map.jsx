import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon using react-icons (similar to how you used FaMapMarker)
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

export default function SimpleMap() {
  const defaultProps = {
    center: [7.9474823, -11.7372105],
    zoom: 13,
  };

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <MapContainer
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={defaultProps.center} icon={customIcon}>
          <Popup>My Marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
