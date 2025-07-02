import type { FC } from "react"
// material
import { Box } from "@mui/material"
// models
import type { Point } from "@/models/Point"
// styled
import { PointItemButton, PointItemText, PointItemTitle } from "@/styled/components/ui/list-of-points/styledPointItem"

interface Props {
    isActive: boolean
    point: Point
    onClick: (id: number) => void
}

const PointItem: FC<Props> = ({ point, isActive, onClick }) => {
    const buttonVariant = isActive ? "contained" : "text"

    return (
        <PointItemButton
            variant={buttonVariant}
            onClick={() => onClick(point.place_id)}>
            <Box>
                <PointItemTitle>{point.name}, {point.addresstype}</PointItemTitle>
                <PointItemText>Lat {point.lat}</PointItemText>
                <PointItemText>Lon {point.lon}</PointItemText>
            </Box>
        </PointItemButton>
    )
}

export default PointItem