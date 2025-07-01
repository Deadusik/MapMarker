import { Box, Button, Typography } from "@mui/material"
import type { FC } from "react"
import type { Point } from "../../../models/Point"

interface Props {
    isActive: boolean
    point: Point
    onClick: (id: number) => void
}

const PointItem: FC<Props> = ({ isActive, point, onClick }) => {
    const buttonVariant = isActive ? "contained" : "text"

    return (
        <Button sx={{ width: "100%" }}
            variant={buttonVariant}
            onClick={() => onClick(point.place_id)}>
            <Box>
                <Typography sx={{ fontSize: { xs: "12px", md: "18px" } }}>
                    {point.name}, {point.addresstype}
                </Typography>
                <Typography sx={{ fontSize: { xs: "12px", md: "18px" } }}>Lat {point.lat}</Typography>
                <Typography sx={{ fontSize: { xs: "12px", md: "18px" } }}>Lon {point.lon}</Typography>
            </Box>
        </Button>
    )
}

export default PointItem