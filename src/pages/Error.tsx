// material
import { Typography } from "@mui/material"
// styled 
import { ErrorContainer } from "@/styled/pages/styledError"

const Error = () => {
    return (
        <ErrorContainer>
            <Typography variant="h2">Ooops... Something went wrong</Typography>
        </ErrorContainer>
    )
}

export default Error