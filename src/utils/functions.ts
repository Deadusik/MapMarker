import { LOCAL_STORAGE_KEYS } from "./constants";
import { isValidCountryCode, isValidTheme, type CountryCode, type Theme } from "./types";

export const getSettings = (): [Theme, CountryCode] => {
    const themeRaw = localStorage.getItem(LOCAL_STORAGE_KEYS.theme) || ''
    const languageRaw = localStorage.getItem(LOCAL_STORAGE_KEYS.language) || ''

    const browserLanguage = navigator.language.slice(0, 2).toLocaleLowerCase()
    const defaultLanguage = isValidCountryCode(browserLanguage) ? browserLanguage : 'en'

    const theme = isValidTheme(themeRaw) ? themeRaw : 'default'
    const language = isValidCountryCode(languageRaw) ? languageRaw : defaultLanguage

    return [theme, language]
}