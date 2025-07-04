import { Backdrop, Box, styled } from "@mui/material";
import { Map } from "@vis.gl/react-google-maps";

export const MapContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    height: "100%",
    gap: "10px",

    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: "250px 1fr",
        gridTemplateRows: "1fr",
    },
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
    },
}))

export const SearchContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gap: "8px",
    overflow: "hidden",

    // swap map and list depends on screen size
    [theme.breakpoints.up('md')]: {
        gridRow: "1",
    },
    [theme.breakpoints.down('md')]: {
        gridRow: "2",
    },
}))

export const GoogleMap = styled(Map)({
    width: "100%",
    height: "100%",
})

export const LoadingScreen = styled(Backdrop)(({ theme }) => ({
    color: "#fff",
    zIndex: theme.zIndex.drawer + 1,
}))