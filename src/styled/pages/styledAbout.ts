import { SCREEN_SIZES } from "@/utils/constants";
import { Box, Button, Card, styled, TextField, type BoxProps } from "@mui/material";

export const AboutContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
})

export const AboutContent = styled(Box)({
    maxWidth: SCREEN_SIZES.sm,
    widows: "100%"
})

export const ContactUsCard = styled(Card)(({ theme }) => ({
    marginTop: "40px",
    backgroundColor: theme.palette.secondary.main,
}))

export const ContactUsFormContainer = styled(Box)<BoxProps>({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
})

export const ContactUsField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
}))

export const SubmitButton = styled(Button)({
    height: "50px",
})