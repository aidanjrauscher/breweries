import React from "react";
import GoogleMapReact from 'google-map-react'; 

const MapPin = () => {
  return(
    <div>
      <img style={{height: '2.5em'}} src="/mappin.png"/>
    </div>
  )
}

const BreweryMap = ({brewery})=>{
  const mapInfo = {
    center: {
      lat: Number(brewery.latitude),
      lng: Number(brewery.longitude)
    },
    zoom: 12
  }
  return(
    <div style={{ height: '70vh', width: '100%', borderRadius: '2vh', overflow: "hidden" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyClN2ty8d0FZVJ_Vsw0g2TeoEOS77xLJVY" }}
        defaultCenter={mapInfo.center}
        defaultZoom={mapInfo.zoom}
      >
        <MapPin lat={mapInfo.center.lat} lng={mapInfo.center.lng} text={brewery.name}></MapPin>
      </GoogleMapReact>
    </div>
  )

}


export default BreweryMap