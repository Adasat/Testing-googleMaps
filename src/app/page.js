'use client'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow , 
  Marker
} from '@vis.gl/react-google-maps'
import { useState } from 'react';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
}  from 'use-places-autocomplete'


import MapFromVis from '@/components/MapFromVIS/MapFromVis';
import MapReactGoogleMaps from '@/components/MapReactGoogleMaps/MapReactGoogleMaps';

import MapFromGoogle3D from '@/components/MapFromGoogle3D/MapFromGoogle3D';
import MapReactGoogleMapsAPI from '@/components/MapReactGoogleMapsAPI/MapReactGoogleMapsAPI';

export default function Home() {
  
  return (
    <div className='h-screen w-11/12 flex justify-center grid-cols-3 gap-4 mx-4 p-4'>
      <MapFromVis />
      {/* <MapFromGoogle3D /> */}    
      <MapReactGoogleMaps/>
      <MapReactGoogleMapsAPI/>
      
    </div>
      
  );
}

