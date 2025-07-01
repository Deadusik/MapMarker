import { useEffect, useRef, useState } from "react"
// components
import { APIProvider, InfoWindow, Map as MapComponent, Marker } from "@vis.gl/react-google-maps"
import ListOfPoints from "../components/ui/list-of-points/ListOfPoints"
import PointInfo from "../components/ui/info/PointInfo"
// material
import { Backdrop, Box, CircularProgress, Paper } from "@mui/material"
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// redux
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchPoints } from "../store/reducers/PointsActionCreators"

interface Coordinates {
    lat: number
    lng: number
}

const Map = () => {
    // states
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    const [isMarkerActive, setIsMarkerActive] = useState(false)
    const [currentCenter, setCurrentCenter] = useState<Coordinates | null>({ lat: 0, lng: 0 })
    // redux vaiables
    const { selectedPoint } = useAppSelector(state => state.pointsReducer)
    const dispatch = useAppDispatch()
    // ref
    const searchInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (selectedPoint) {
            setCurrentCenter({
                lat: parseFloat(selectedPoint.lat),
                lng: parseFloat(selectedPoint.lon)
            })
        }

        // prevent auto centering
        const releaseCenterTimeout = setTimeout(() => {
            setCurrentCenter(null)
        }, 0)

        return () => clearTimeout(releaseCenterTimeout)
    }, [selectedPoint])

    const onMarkerClick = () => {
        setIsMarkerActive(true)
    }

    const onMarkerCloseClick = () => {
        setIsMarkerActive(false)
    }

    const onSearchPlaceClick = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (searchInputRef.current) {
            const placeName = searchInputRef.current.value
            dispatch(fetchPoints(placeName))
        }
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
                <Paper
                    component="form"
                    // allow enter input
                    onSubmit={onSearchPlaceClick}
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: "100%",
                        border: "1px solid rgba(0, 0, 0, 0.1)"
                    }}>
                    <InputBase
                        inputRef={searchInputRef}
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }} />
                    <IconButton
                        onClick={onSearchPlaceClick}
                        type="button" sx={{ p: '10px' }}
                        aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <ListOfPoints />
            </Box>
            {/* google map */}
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <MapComponent
                    style={{ width: "100%", height: "100%" }}
                    center={currentCenter}
                    defaultCenter={{ lat: 50.4501, lng: 30.5234 }}
                    defaultZoom={3}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    onIdle={() => setIsMapLoaded(true)} />
                {/* map marker */
                    selectedPoint &&
                    <Marker
                        position={{
                            lat: parseFloat(selectedPoint.lat),
                            lng: parseFloat(selectedPoint.lon)
                        }}
                        onClick={onMarkerClick} />
                }
                {/* marker modal window */
                    isMarkerActive && selectedPoint &&
                    <InfoWindow
                        onCloseClick={onMarkerCloseClick}
                        position={{
                            lat: parseFloat(selectedPoint.lat),
                            lng: parseFloat(selectedPoint.lon)
                        }}>
                        <PointInfo point={selectedPoint} />
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