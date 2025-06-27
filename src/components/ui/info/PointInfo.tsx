import { Box, Typography } from "@mui/material"
import type { Point } from "../../../models/Point"
import type { FC } from "react"

interface Props {
    point: Point
}

const PointInfo: FC<Props> = ({ point }) => {
    return (
        <Box sx={{
            maxWidth: "200px",
        }}>
            <Typography variant="h4">{point.name}, {point.addresstype}</Typography>
            <Typography>Lat {point.lat}</Typography>
            <Typography>Lon {point.lon}</Typography>
        </Box>
    )
}

export default PointInfo