import React, { useState } from 'react'
import RMG from 'react-map-gl'

export default function MapComp() {

    const [viewPort, setViewPort] = useState({
        latitude: 25.4917,
        longitude: 81.8632,
        zoom: 8,
        width: '100vw',
        height: '100vh'
    })

    return (
        <RMG {...viewPort} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
            onViewportChange={viewport => setViewPort(viewport)}
        >

        </RMG>
    )
}
