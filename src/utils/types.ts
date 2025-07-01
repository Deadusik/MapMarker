export const THEMES = ['dark', 'default'] as const
export type Theme = typeof THEMES[number]
export const isValidTheme = (value: string): value is Theme => {
    return (THEMES as readonly string[]).includes(value)
}

export const COUNTRY_CODES = ['ua', 'en'] as const
export type CountryCode = typeof COUNTRY_CODES[number]
export const isValidCountryCode = (value: string): value is CountryCode => {
    return (COUNTRY_CODES as readonly string[]).includes(value)
}