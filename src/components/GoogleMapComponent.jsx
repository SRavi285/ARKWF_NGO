import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 26.8467,
  lng: 80.9462,
}


const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapComponent