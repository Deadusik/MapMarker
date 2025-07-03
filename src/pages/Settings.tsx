// base 
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// types
import type { SelectChangeEvent } from "@mui/material"
// redux
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { settingsSlice } from "@/store/reducers/SettingsSlice"
//utils
import { isValidCountryCode, isValidTheme, type CountryCode, type Theme } from "@/utils/types"
import { SETTINGS } from "@/utils/translation"
// material
import { Box, CardContent, FormControl, InputLabel, MenuItem, Typography } from "@mui/material"
// styled
import {
    ApplyButton, ButtonContainer,
    SettingsCard, SettingsContainer,
    SettingsContent, SettingsDivider,
    SettingsSelect
} from "@/styled/pages/styledSettings"
import { LOCAL_STORAGE_KEYS } from "@/utils/constants"


const Settings = () => {
    const { t } = useTranslation()
    // redux variables
    const themeName = useAppSelector(state => state.settingsReducer.theme)
    const languageCode = useAppSelector(state => state.settingsReducer.language)
    const dispatch = useAppDispatch()
    const {
        setLanguage: setLanguageAction,
        setTheme: setThemeAction
    } = settingsSlice.actions

    // states
    const [theme, setTheme] = useState<Theme>(themeName)
    const [language, setLanguage] = useState<CountryCode>(languageCode)

    // handlers
    const onThemeChange = (event: SelectChangeEvent<unknown>) => {
        const selectedTheme = event.target.value as string

        if (isValidTheme(selectedTheme))
            setTheme(selectedTheme)
    }

    const onLanguageChange = (event: SelectChangeEvent<unknown>) => {
        const selectedLanguage = event.target.value as string

        if (isValidCountryCode(selectedLanguage))
            setLanguage(selectedLanguage)
    }

    const onApplyClick = () => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.theme, theme)
        dispatch(setThemeAction(theme))

        localStorage.setItem(LOCAL_STORAGE_KEYS.language, language)
        dispatch(setLanguageAction(language))
    }

    return (
        <SettingsContainer>
            <SettingsContent>
                <SettingsCard>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>{t(SETTINGS.title)}</Typography>
                        { /* theme select */}
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="theme-select">{t(SETTINGS.themeHint)}</InputLabel>
                                <SettingsSelect
                                    labelId="theme-select"
                                    id="theme-select"
                                    value={theme}
                                    label="Theme"
                                    onChange={onThemeChange}>
                                    <MenuItem value={"default"}>{t(SETTINGS.default)}</MenuItem>
                                    <MenuItem value={"dark"}>{t(SETTINGS.dark)}</MenuItem>
                                </SettingsSelect>
                            </FormControl>
                        </Box>
                        { /* language select */}
                        <Box mt={4}>
                            <FormControl fullWidth>
                                <InputLabel id="language-select">{t(SETTINGS.languageHint)}</InputLabel>
                                <SettingsSelect labelId="language-select" id="language-select"
                                    value={language} label="Language"
                                    onChange={onLanguageChange}>
                                    <MenuItem value={"en"}>{t(SETTINGS.en)}</MenuItem>
                                    <MenuItem value={"ua"}>{t(SETTINGS.ua)}</MenuItem>
                                </SettingsSelect>
                            </FormControl>
                        </Box>
                        <SettingsDivider />
                        {/* apply button */}
                        <ButtonContainer onClick={onApplyClick}>
                            <ApplyButton variant="contained">{t(SETTINGS.button)}</ApplyButton>
                        </ButtonContainer>
                    </CardContent>
                </SettingsCard>
            </SettingsContent>
        </SettingsContainer>
    )
}

export default Settings