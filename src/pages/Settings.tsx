// base 
import { useState } from "react"
// types
import type { SelectChangeEvent } from "@mui/material"
// redux
import { useAppDispatch } from "@/hooks/redux"
import { settingsSlice } from "@/store/reducers/SettingsSlice"
//utils
import { isValidCountryCode, isValidTheme } from "@/utils/types"
// material
import { Box, CardContent, FormControl, InputLabel, MenuItem, Typography } from "@mui/material"
// styled
import {
    ApplyButton, ButtonContainer,
    SettingsCard, SettingsContainer,
    SettingsContent, SettingsDivider,
    SettingsSelect
} from "@/styled/pages/styledSettings"

const Settings = () => {
    // states
    const [theme, setTheme] = useState("default")
    const [language, setLanguage] = useState("en")
    // redux variables
    const dispatch = useAppDispatch()
    const {
        setLanguage: setLanguageAction,
        setTheme: setThemeAction
    } = settingsSlice.actions

    // handlers
    const onThemeChange = (event: SelectChangeEvent<unknown>) => {
        const selectedTheme = event.target.value as string

        if (isValidTheme(selectedTheme)) {
            setTheme(selectedTheme)
            dispatch(setThemeAction(selectedTheme))
        }
    }

    const onLanguageChange = (event: SelectChangeEvent<unknown>) => {
        const selectedLanguage = event.target.value as string

        if (isValidCountryCode(selectedLanguage)) {
            setLanguage(selectedLanguage)
            dispatch(setLanguageAction(selectedLanguage))
        }
    }

    return (
        <SettingsContainer>
            <SettingsContent>
                <SettingsCard>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>Settings</Typography>
                        { /* theme select */}
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="theme-select">Theme</InputLabel>
                                <SettingsSelect
                                    labelId="theme-select"
                                    id="theme-select"
                                    value={theme}
                                    label="Theme"
                                    onChange={onThemeChange}>
                                    <MenuItem value={"default"}>Default</MenuItem>
                                    <MenuItem value={"dark"}>Dark</MenuItem>
                                </SettingsSelect>
                            </FormControl>
                        </Box>
                        { /* language select */}
                        <Box mt={4}>
                            <FormControl fullWidth>
                                <InputLabel id="language-select">Language</InputLabel>
                                <SettingsSelect labelId="language-select" id="language-select"
                                    value={language} label="Language"
                                    onChange={onLanguageChange}>
                                    <MenuItem value={"en"}>English</MenuItem>
                                    <MenuItem value={"ua"}>Ukranian</MenuItem>
                                </SettingsSelect>
                            </FormControl>
                        </Box>
                        <SettingsDivider />
                        {/* apply button */}
                        <ButtonContainer>
                            <ApplyButton variant="contained">Apply</ApplyButton>
                        </ButtonContainer>
                    </CardContent>
                </SettingsCard>
            </SettingsContent>
        </SettingsContainer>
    )
}

export default Settings