export const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org'

export const getSearchPointsUrl = (query: string) => {
    return `${NOMINATIM_BASE_URL}/search?q=${encodeURIComponent(query)}&format=json`
}