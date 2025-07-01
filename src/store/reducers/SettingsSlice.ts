import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CountryCode, Theme } from "../../utils/types";

export interface SettingsState {
    theme: Theme
    language: CountryCode
}

const initialState: SettingsState = {
    theme: 'default',
    language: 'en'
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<CountryCode>) {
            state.language = action.payload
        },
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload
        },
    }
})

export default settingsSlice.reducer