import { Box, Button, Card, CardContent, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import type { SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { SCREEN_SIZES } from "../utils/constants"
import { useAppDispatch } from "../hooks/redux"
import { settingsSlice } from "../store/reducers/SettingsSlice"
import { isValidCountryCode, isValidTheme } from "../utils/types"

const Settings = () => {
    const [theme, setTheme] = useState("default")
    const [language, setLanguage] = useState("en")
    // redux vars
    const dispatch = useAppDispatch()
    const {
        setLanguage: setLanguageAction,
        setTheme: setThemeAction
    } = settingsSlice.actions

    const themeChangeHandler = (event: SelectChangeEvent) => {
        const selectedTheme = event.target.value

        setTheme(selectedTheme)

        if (isValidTheme(selectedTheme)) {
            dispatch(setThemeAction(selectedTheme))
        }
    }

    const languageChangeHandler = (event: SelectChangeEvent) => {
        const selectedLanguage = event.target.value

        setLanguage(selectedLanguage)

        if (isValidCountryCode(selectedLanguage)) {
            dispatch(setLanguageAction(selectedLanguage))
        }
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100%"
        }}>
            <Box sx={{
                maxWidth: SCREEN_SIZES.sm600,
                width: "100%"
            }}>
                <Card sx={{
                    backgroundColor: "secondary.main"
                }}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Settings
                        </Typography>
                        { /* theme drop box */}
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="theme-select">Theme</InputLabel>
                                <Select
                                    sx={{
                                        backgroundColor: "secondary.light"
                                    }}
                                    labelId="theme-select"
                                    id="theme-select"
                                    value={theme}
                                    label="Theme"
                                    onChange={themeChangeHandler}>
                                    <MenuItem value={"default"}>Default</MenuItem>
                                    <MenuItem value={"dark"}>Dark</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        { /* language drop box */}
                        <Box mt={4}>
                            <FormControl fullWidth>
                                <InputLabel id="language-select">Language</InputLabel>
                                <Select
                                    sx={{
                                        backgroundColor: "secondary.light"
                                    }}
                                    labelId="language-select"
                                    id="language-select"
                                    value={language}
                                    label="Language"
                                    onChange={e => languageChangeHandler(e)}>
                                    <MenuItem value={"en"}>English</MenuItem>
                                    <MenuItem value={"ua"}>Ukranian</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Divider sx={{ margin: "20px" }} />
                        <Box sx={{
                            width: "100%",
                            display: "flex"
                        }}>
                            <Button
                                variant="contained"
                                sx={{
                                    height: "45px",
                                    width: "120px",
                                }}>
                                Apply
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default Settings