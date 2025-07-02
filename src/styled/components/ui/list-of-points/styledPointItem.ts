import { Button, styled, Typography } from "@mui/material";

export const PointItemButton = styled(Button)({
    width: "100%"
})

export const PointItemTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",

    [theme.breakpoints.up('md')]: {
        fontSize: "18px"
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "12px"
    },
}))

export const PointItemText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: "18px"
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "12px"
    },
}))