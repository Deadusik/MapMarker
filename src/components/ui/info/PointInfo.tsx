import type { FC } from "react"
// models
import type { Point } from "@/models/Point"
// styled
import { InfoContainer, InfoText } from "@/styled/components/ui/info/styledPointInfo"

interface Props {
    point: Point
}

const PointInfo: FC<Props> = ({ point }) => {
    return (
        <InfoContainer>
            <InfoText variant="h6">{point.name}, {point.addresstype}</InfoText>
            <InfoText>Lat {point.lat}</InfoText>
            <InfoText>Lon {point.lon}</InfoText>
        </InfoContainer>
    )
}

export default PointInfo