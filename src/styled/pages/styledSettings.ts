import { SCREEN_SIZES } from "@/utils/constants";
import { Box, Button, Card, Divider, Select, styled } from "@mui/material";

export const SettingsContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%"
})

export const SettingsContent = styled(Box)({
    maxWidth: SCREEN_SIZES.sm,
    width: "100%",
})

export const SettingsCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
}))

export const SettingsSelect = styled(Select)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light
}))

export const SettingsDivider = styled(Divider)({
    margin: "20px"
})

// apply button styles
export const ButtonContainer = styled(Box)({
    width: "100%",
    display: "flex",
})

export const ApplyButton = styled(Button)({
    height: "45px",
    width: "120px",
})