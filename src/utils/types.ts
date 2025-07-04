export const THEMES = ['dark', 'default'] as const
export const COUNTRY_CODES = ['ua', 'en'] as const

// types
export type Theme = typeof THEMES[number]
export type CountryCode = typeof COUNTRY_CODES[number]

// interfaces
export interface Coordinates {
    lat: number
    lng: number
}

// compare type functions
export const isValidTheme = (value: string): value is Theme =>
    (THEMES as readonly string[]).includes(value)

export const isValidCountryCode = (value: string): value is CountryCode =>
    (COUNTRY_CODES as readonly string[]).includes(value)