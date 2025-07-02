import type { FC } from "react"
// models
import type { Point } from "@/models/Point"
// components
import { Typography } from "@mui/material"
import { InfoContainer } from "@/styled/components/ui/info/styledPointInfo"

interface Props {
    point: Point
}

const PointInfo: FC<Props> = ({ point }) => {
    return (
        <InfoContainer>
            <Typography variant="h6">{point.name}, {point.addresstype}</Typography>
            <Typography>Lat {point.lat}</Typography>
            <Typography>Lon {point.lon}</Typography>
        </InfoContainer>
    )
}

export default PointInfo