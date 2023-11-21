'use client'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow , 
  Marker
} from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react';

function MapFromVis() {
    const position = { lat: 48.380581032980515, lng: 8.279626921253104 }
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [open, setOpen] = useState(false)

    

  return (
    <div className='w-full flex-col justify-center items-center'>
        <h2 className='text-center'>Mapa from VIS.gl</h2>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY}>
        <div className='h-3/5 w-full p-3 border-2 border-white rounded-xl'>
          <div className='h-full w-full'>

            <Map 
              zoom={9} 
              center={position} 
              mapId={process.env.NEXT_PUBLIC_MAP_ID}

            >
                <AdvancedMarker 
                    position={position} 
                    onClick={() => setOpen(true)}
                    onMouseOver={() => setShowInfoWindow(true)}
                    onMouseOut={() => setShowInfoWindow(false)}
                    
                    >
                        <Pin 
                            background={'blue'} 
                            borderColor={'green'} 
                            glyphColor={'white'}/>
                {open  && (
                  <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                    <div>
                      <h3>Información del Pin</h3>
                      <p>Aquí va la información relevante...</p>
                    </div>
                  </InfoWindow>
                )}
                </AdvancedMarker>  
            </Map>
            
          </div>

        </div>

        
      </APIProvider>
      <p className='text-black text-center'>Documentation <a  href='https://github.com/visgl/react-google-maps'>here</a></p>

    </div>
  )
}

export default MapFromVis