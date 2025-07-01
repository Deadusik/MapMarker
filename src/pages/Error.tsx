import { Box, Typography } from "@mui/material"

const Error = () => {
    return (
        <Box sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography variant="h2">Ooops... Something went wrong</Typography>
        </Box>
    )
}

export default Error