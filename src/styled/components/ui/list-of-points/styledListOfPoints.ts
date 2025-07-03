import { Box, Card, List, ListItem, styled, Typography } from "@mui/material";

export const PointListContainer = styled(Box)({
    overflow: "auto",
})

export const PointList = styled(List)({
    padding: "0px"
})

export const PointListItem = styled(ListItem)({
    padding: '0px'
})

export const PointListCard = styled(Card)({
    padding: "1px",
    height: "100%",
    overflow: "auto",
})

export const ItemContainer = styled(Box)({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

export const InfoText = styled(Typography)({
    fontSize: '24px',
    textAlign: "center",
    padding: "0 10px",
})

export const ErrorText = styled(Typography)({
    fontSize: '24px',
    color: "tomato",
    textAlign: "center",
    padding: "0 10px",
})