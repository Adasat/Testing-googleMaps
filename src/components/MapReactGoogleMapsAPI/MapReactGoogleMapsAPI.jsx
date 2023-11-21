import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useCallback } from 'react';
import { useState } from 'react';

const containerStyle = {
  width: '400px',
  height: '100%'
};

const position = { lat: 48.380581032980515, lng: 8.279626921253104 };


function MapReactGoogleMapsAPI() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY
      })
      const [showInfoWindow, setShowInfoWindow] = useState(false);

    
      const [map, setMap] = useState(null)
    
      const onLoad = useCallback(function callback(map) {
       
    
        setMap(map)
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
        <div  className='flex-col justify-center items-center text-center'>
            <h2>Map React Google Maps API</h2> 
            <div className='h-3/5 w-full p-3 border-2 border-white rounded-xl'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={8}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <Marker 
                        position={position}
                        onMouseOver={() => setShowInfoWindow(true)}
                        onMouseOut={() => setShowInfoWindow(false)}
                    >
                        {
                            showInfoWindow && (
                                <InfoWindow
                                    onCloseClick={ () => setShowInfoWindow(false)}
                                >
                                    <div>
                                        <h3>Información del Pin</h3>
                                        <p>Aquí va la información relevante...</p>
                                    </div>
                                </InfoWindow>
                            )
                        }
                        
                    </Marker>
                </GoogleMap>
            </div>
            <p className='text-black '>Documentation <a  href='https://www.npmjs.com/package/@react-google-maps/api'>here</a></p>

        </div>
      ) : <></>
}

export default MapReactGoogleMapsAPI