import { SCREEN_SIZES } from "@/utils/constants";
import { Box, Button, Card, Paper, styled, TextField, type PaperProps } from "@mui/material";

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

export const ContactUsFormContainer = styled(Paper)<PaperProps<'form'>>(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
    backgroundColor: theme.palette.secondary.main
}))

export const ContactUsField = styled(TextField)(({ theme }) => ({
    // mui input colors adjustment to 
    // show correct colors around error text
    '& .MuiOutlinedInput-root': {
        backgroundColor: theme.palette.secondary.light,
    },
    '& .MuiOutlinedInput-root.Mui-error': {
        backgroundColor: theme.palette.secondary.main,
    },
}))

export const SubmitButton = styled(Button)({
    height: "50px",
})