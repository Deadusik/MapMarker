import { default_dark } from "@/utils/colors";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const InfoContainer = styled(Box)({
    maxWidth: '200px'
})

// hardcode color to prevent changing color
// depends on theme (white on white issue)
export const InfoText = styled(Typography)({
    color: default_dark
})