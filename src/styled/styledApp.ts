import { BottomNavigation, Container, styled } from "@mui/material";

export const AppContainer = styled(Container)({
    height: "100vh",
    padding: "20px 20px 70px",
    overflow: "auto"
})

export const BottomNavbar = styled(BottomNavigation)(({ theme }) => ({
    position: "fixed",
    bottom: "0",
    width: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: theme.palette.secondary.main,
    zIndex: "100"
}))