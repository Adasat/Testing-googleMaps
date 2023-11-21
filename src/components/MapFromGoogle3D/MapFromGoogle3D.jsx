import React, { useEffect, useRef } from 'react';
import { Viewer, Cesium3DTileset, Ion } from 'cesium';

function MapFromGoogle3D() {
  const cesiumContainerRef = useRef(null);
  Ion.defaultAccessToken = 'tu_token_de_acceso_personal';


  useEffect(() => {
    if (!cesiumContainerRef.current) return;

    const viewer = new Viewer(cesiumContainerRef.current, {
      imageryProvider: false,
      baseLayerPicker: false,
      requestRenderMode: true,
    });

    viewer.scene.primitives.add(new Cesium3DTileset({
      url: `https://tile.googleapis.com/v1/3dtiles/root.json?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      showCreditsOnScreen: true,
    }));

    viewer.scene.globe.show = false;

    // Cleanup function to destroy viewer when component unmounts
    return () => {
      viewer && viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer"  style={{ width: '100%', height: '100%' }} ref={cesiumContainerRef} className=' text-black'></div>;
}

export default MapFromGoogle3D;
