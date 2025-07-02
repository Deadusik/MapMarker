export const NOMINATIM_BASE_URL = '/api/nominatim'

export const getSearchPointsUrl = (query: string) =>
    `${NOMINATIM_BASE_URL}/search?q=${encodeURIComponent(query)}&format=json`
