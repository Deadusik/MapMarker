// components
import { APIProvider, InfoWindow, Map as MapComponent, Marker } from "@vis.gl/react-google-maps"
import ListOfPoints from "../components/ui/list-of-points/ListOfPoints"
// uitls
import { useState } from "react"
import { Backdrop, Box, CircularProgress, Paper } from "@mui/material"
import PointInfo from "../components/ui/info/PointInfo"
// material
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

// DEV: test data !!!
const test_point = {
    place_id: "4",
    name: "Kyiv",
    addresstype: "City",
    lat: "50.4500336",
    lon: "30.5241361"
}

const Map = () => {
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    const [isMarkerActive, setIsMarkerActive] = useState(false)

    const onMarkerClick = () => {
        setIsMarkerActive(true)
    }

    const onMarkerCloseClick = () => {
        setIsMarkerActive(false)
    }

    return (
        <Box sx={{
            display: "grid",
            height: "100%",
            gap: "10px",
            gridTemplateColumns: { md: "250px 1fr", xs: "1fr" },
            gridTemplateRows: { md: "1fr", xs: "1fr 1fr" }
        }}>
            {/* list of points box */}
            <Box sx={{
                display: "grid",
                gridTemplateRows: "auto 1fr",
                gap: "8px",
                overflow: "hidden",
                /* if mobile, set bottom 
                position for list box */
                gridRow: { xs: "2", md: "1" },
            }}>
                <Paper component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }} />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <ListOfPoints />
            </Box>
            {/* google map */}
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <MapComponent
                    style={{ width: "100%", height: "100%" }}
                    defaultCenter={{ lat: 22.54992, lng: 0 }}
                    defaultZoom={3}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    onIdle={() => {
                        setIsMapLoaded(true)
                    }} />
                {/* map marker */}
                <Marker
                    position={{ lat: 22.54992, lng: 0 }}
                    onClick={onMarkerClick} />
                {/* marker modal window */
                    isMarkerActive &&
                    <InfoWindow
                        onCloseClick={onMarkerCloseClick}
                        position={{ lat: 22.54992, lng: 0 }}>
                        <PointInfo point={test_point} />
                    </InfoWindow>
                }
            </APIProvider>
            {/* loading indicator */}
            <Backdrop
                sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
                open={!isMapLoaded}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    )
}

export default Map