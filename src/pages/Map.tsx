// base
import { useEffect, useState } from "react"
// components
import { APIProvider, InfoWindow, Marker } from "@vis.gl/react-google-maps"
import { ListOfPoints, PointInfo, SearchMap } from "@/components"
// material
import { CircularProgress } from "@mui/material"
// utils
import type { Coordinates } from "@/utils/types";
import { DEFAULT_CENTER } from "@/utils/constants";
// redux
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { fetchPoints } from "@/store/reducers/PointsActionCreators"
// styled
import { GoogleMap, LoadingScreen, MapContainer, SearchContainer } from "@/styled/pages/styledMap";

const Map = () => {
    // states
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    const [isMarkerActive, setIsMarkerActive] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [currentCenter, setCurrentCenter] = useState<Coordinates | null>(null)
    // redux vaiables
    const { selectedPoint } = useAppSelector(state => state.pointsReducer)
    const dispatch = useAppDispatch()

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

    // handlers
    const onMarkerClick = () => {
        setIsMarkerActive(true)
    }

    const onMarkerCloseClick = () => {
        setIsMarkerActive(false)
    }

    const onSearchPlaceClick = (e: React.FormEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(fetchPoints(searchValue))
    }

    const onSearchChange = (value: string) => {
        setSearchValue(value)
    }

    return (
        <MapContainer>
            {/* list of points box */}
            <SearchContainer>
                <SearchMap onSearchClick={onSearchPlaceClick} onChange={onSearchChange} />
                <ListOfPoints />
            </SearchContainer>
            {/* google map */}
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    center={currentCenter}
                    defaultCenter={DEFAULT_CENTER}
                    defaultZoom={3}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    onIdle={() => setIsMapLoaded(true)} />
                {/* map marker */
                    selectedPoint &&
                    <Marker
                        position={{
                            lat: parseFloat(selectedPoint.lat),
                            lng: parseFloat(selectedPoint.lon),
                        }}
                        onClick={onMarkerClick} />
                }
                {/* marker modal window */
                    isMarkerActive && selectedPoint &&
                    <InfoWindow
                        onCloseClick={onMarkerCloseClick}
                        position={{
                            lat: parseFloat(selectedPoint.lat),
                            lng: parseFloat(selectedPoint.lon),
                        }}>
                        <PointInfo point={selectedPoint} />
                    </InfoWindow>
                }
            </APIProvider>
            {/* loading screen */}
            <LoadingScreen open={!isMapLoaded}>
                <CircularProgress color="inherit" />
            </LoadingScreen>
        </MapContainer>
    )
}

export default Map