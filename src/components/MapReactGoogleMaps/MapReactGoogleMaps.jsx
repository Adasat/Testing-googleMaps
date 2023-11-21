import React from 'react'
import { GoogleMap, Marker, withGoogleMap, InfoWindow } from "react-google-maps"
import Script from 'next/script';
import { useState } from 'react';

const MapWithAMarker = withGoogleMap(props => (
    <GoogleMap
        defaultCenter={props.position}
        defaultZoom={9}
    >
        <div 
            onMouseOver={() => props.setInfo(true)}
            onMouseOut={() => props.setInfo(false)}
        >
            <Marker position={props.position} 
                onMouseOver={() => props.setInfo(true)}
                onMouseOut={() => props.setInfo(false)}
                
            >
                {props.showInfo &&
                <InfoWindow 
                    position={props.position} 
                    
                    onCloseClick={() => props.setInfo(false)}
                >
                    <div>
                        <h3>Información del Pin</h3>
                        <p>Aquí va la información relevante...</p>
                    </div>
                </InfoWindow>
                }
            </Marker>
        </div>
    </GoogleMap>

    
));

function MapReactGoogleMaps() {
  const position = { lat: 48.380581032980515, lng: 8.279626921253104 };
  const [showInfoWindow, setShowInfoWindow] = useState(false);
    console.log(showInfoWindow)
  return (
    <div className='w-full flex-col justify-center items-center text-center'>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}`}
        strategy="beforeInteractive"
      />
      <h2>Map React Google Maps (antigua)</h2>
      <div className='h-3/5 w-full p-3 border-2 border-white rounded-xl'>
      <MapWithAMarker
        position={position}
        showInfo={showInfoWindow}
        setInfo={setShowInfoWindow}
        containerElement={<div style={{ height: `100%`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
      <p className='text-black '>Documentation <a  href='https://tomchentw.github.io/react-google-maps/#documentation'>here</a></p>
    </div>
  )
}

export default MapReactGoogleMaps