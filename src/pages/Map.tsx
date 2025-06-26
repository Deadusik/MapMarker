import styled from 'styled-components'
// components
import { APIProvider, Map as MapComponent } from "@vis.gl/react-google-maps"
import ListOfPoints from "../components/ui/list-of-points/ListOfPoints"
// uitls
import { SCREEN_SIZES } from "../utils/constants"
import { useState } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

const StyledLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    gap: 10px;

    @media (max-width: ${SCREEN_SIZES.sm}px) {
        grid-template-columns: 1fr;
        grid-template-rows: 450px auto;
        direction: rtl;

        /* reverse row if mobile */
        & > :first-child { 
            grid-row: 2;
        }

        & > :last-child {
            grid-row: 1;
        }
    }
`

const Map = () => {
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    return (
        <StyledLayout>
            <ListOfPoints/>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <MapComponent
                    style={{width: '100%', height: '100%'}}
                    defaultCenter={{lat: 22.54992, lng: 0}}
                    defaultZoom={3}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    onIdle={() => {
                        setIsMapLoaded(true)
                    }}/>
            </APIProvider>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={!isMapLoaded}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </StyledLayout>
    )
}

export default Map